import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as route53 from "aws-cdk-lib/aws-route53";
import * as route53Targets from "aws-cdk-lib/aws-route53-targets";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfrontOrigins from "aws-cdk-lib/aws-cloudfront-origins";

const rootDomain = "isaac.works";
const stacklineDomain = `stackline.${rootDomain}`;

export class Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, `${id}Bucket`, {
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, `${id}OriginAccessIdentity`);

    bucket.grantRead(originAccessIdentity);

    const hostedZone = route53.PublicHostedZone.fromLookup(this, `${id}HostedZone`, {
      domainName: rootDomain
    });

    const certificate = new acm.Certificate(this, `${id}Certificate`, {
      domainName: stacklineDomain,
      validation: acm.CertificateValidation.fromDns(hostedZone)
    });

    const distribution = new cloudfront.Distribution(this, `${id}Distribution`, {
      defaultRootObject: "index.html",
      httpVersion: cloudfront.HttpVersion.HTTP2,
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      domainNames: [stacklineDomain],
      certificate: certificate,
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3Origin(bucket, { originAccessIdentity }),
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED
      }
    });

    new route53.ARecord(this, `${id}ARecord`, {
      zone: hostedZone,
      recordName: stacklineDomain,
      target: route53.RecordTarget.fromAlias(new route53Targets.CloudFrontTarget(distribution))
    });

    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      sources: [s3Deployment.Source.asset(resolve(process.cwd(), "dist"))],
      destinationBucket: bucket,
      distribution,
      distributionPaths: ["/index.html"]
    });
  }
}
