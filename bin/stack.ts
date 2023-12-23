import { resolve } from "node:path";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3Deployment from "aws-cdk-lib/aws-s3-deployment";

export class Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new s3.Bucket(this, `${id}Bucket`, {
      publicReadAccess: true,
      websiteIndexDocument: "index.html",
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });

    new s3Deployment.BucketDeployment(this, `${id}BucketDeployment`, {
      destinationBucket: bucket,
      sources: [s3Deployment.Source.asset(resolve(process.cwd(), "dist"))]
    });
  }
}
