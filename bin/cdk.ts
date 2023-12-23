#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { Stack } from "./stack";

const app = new cdk.App();

new Stack(app, "StacklineTakehome", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  }
});
