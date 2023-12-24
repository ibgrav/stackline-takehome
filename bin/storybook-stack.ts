import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";

const domainName = "stackline-storybook.isaac.works";

export const storybookAssetDir = resolve(process.cwd(), "storybook-static");

export class StorybookStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // public s3 bucket to serve the site
    // the bucket name must match the domain name for the CNAME to work
    const bucket = new s3.Bucket(this, `${id}Bucket`, {
      bucketName: domainName,
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      autoDeleteObjects: true,
      enforceSSL: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS,
      accessControl: s3.BucketAccessControl.BUCKET_OWNER_FULL_CONTROL
    });

    // deploy the built assets to the s3 bucket
    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      sources: [s3Deployment.Source.asset(storybookAssetDir)],
      destinationBucket: bucket
    });
  }
}
