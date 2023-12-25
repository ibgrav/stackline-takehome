import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfrontOrigins from "aws-cdk-lib/aws-cloudfront-origins";

export const siteAssetDir = resolve(process.cwd(), "dist");

// This domain is managed outside Route53,so a CNAME record must be created manually pointing at the cloudfront distribution.
const domainName = "stackline.isaac.works";

export class SiteStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3 bucket to hold the static assets
    const bucket = new s3.Bucket(this, `${id}Bucket`);

    // allow cloudfront to access the private bucket
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, `${id}OriginAccessIdentity`);

    // apply the identity to the bucket
    bucket.grantRead(originAccessIdentity);

    // create a certificate to allow https access to the custom domain
    const certificate = new acm.Certificate(this, `${id}Certificate`, {
      domainName,
      validation: acm.CertificateValidation.fromDns()
    });

    // create a cloudfront CDN distribution for best caching performance
    const distribution = new cloudfront.Distribution(this, `${id}Distribution`, {
      defaultRootObject: "index.html",
      domainNames: [domainName],
      certificate: certificate,
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3Origin(bucket, { originAccessIdentity }),
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED
      }
    });

    // deploy the built assets to the s3 bucket
    new s3Deployment.BucketDeployment(this, `${id}MainDeployment`, {
      sources: [s3Deployment.Source.asset(siteAssetDir, { exclude: ["*", "!assets/*"] })],
      // set cache-control header for best performance
      cacheControl: [s3Deployment.CacheControl.maxAge(cdk.Duration.seconds(365))],
      destinationBucket: bucket,
      distribution
    });
    // two separate deployments are needed to ensure only the assets folder is browser cached
    new s3Deployment.BucketDeployment(this, `${id}AssetDeployment`, {
      sources: [s3Deployment.Source.asset(siteAssetDir, { exclude: ["assets/*"] })],
      cacheControl: [s3Deployment.CacheControl.maxAge(cdk.Duration.days(0))],
      destinationBucket: bucket,
      distribution
    });
  }
}
