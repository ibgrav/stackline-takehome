import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";

// const domainName = "stackline-storybook.isaac.works";

export class StorybookStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // s3 bucket to hold the static assets
    const bucket = new s3.Bucket(this, `${id}Bucket`, {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html"
    });

    // deploy the built assets to the s3 bucket
    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      sources: [s3Deployment.Source.asset(resolve(process.cwd(), "storybook-static"))],
      destinationBucket: bucket
    });
  }
}
