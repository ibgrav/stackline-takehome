import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as cloudfront from "aws-cdk-lib/aws-cloudfront";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";
import * as cloudfrontOrigins from "aws-cdk-lib/aws-cloudfront-origins";

export class Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3 bucket to hold the static assets
    const bucket = new s3.Bucket(this, `${id}Bucket`);

    // allow cloudfront to access the private bucket
    const originAccessIdentity = new cloudfront.OriginAccessIdentity(this, `${id}OriginAccessIdentity`);

    // apply the identity to the bucket
    bucket.grantRead(originAccessIdentity);

    // create a cloudfront CDN distribution for public access
    const distribution = new cloudfront.Distribution(this, `${id}Distribution`, {
      defaultRootObject: "index.html",
      defaultBehavior: {
        origin: new cloudfrontOrigins.S3Origin(bucket, { originAccessIdentity })
      }
    });

    // deploy the built assets to the s3 bucket
    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      sources: [s3Deployment.Source.asset(resolve(process.cwd(), "dist"))],
      destinationBucket: bucket,
      distribution,
      // these paths will be invalidated in the distribution when the deployment is complete
      distributionPaths: ["/index.html"]
    });
  }
}
