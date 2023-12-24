import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as acm from "aws-cdk-lib/aws-certificatemanager";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfrontOrigins from "aws-cdk-lib/aws-cloudfront-origins";

export const storybookAssetDir = resolve(process.cwd(), "dist");

const domainName = "stackline-storybook.isaac.works";

// see ./site-stack.ts for a more detailed explanation of this code
export class StorybookStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, `${id}Bucket`);

    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, `${id}OriginAccessIdentity`);

    bucket.grantRead(originAccessIdentity);

    const certificate = new acm.Certificate(this, `${id}Certificate`, {
      domainName,
      validation: acm.CertificateValidation.fromDns()
    });

    const distribution = new cloudfront.Distribution(this, `${id}Distribution`, {
      defaultRootObject: "index.html",
      domainNames: [domainName],
      certificate: certificate,
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3Origin(bucket, { originAccessIdentity })
      }
    });

    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      sources: [s3Deployment.Source.asset(storybookAssetDir)],
      destinationBucket: bucket,
      distribution, // invalidate all paths
      distributionPaths: ["*"]
    });
  }
}
