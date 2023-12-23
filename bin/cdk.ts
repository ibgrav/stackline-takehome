#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { Stack } from "./stack";

const app = new cdk.App();

new Stack(app, "StacklineTakehome", {
  env: {
    region: "us-east-1"
  }
});
