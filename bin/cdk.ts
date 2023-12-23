#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { Stack } from "./stack";

const app = new cdk.App();

// the id here is used as a prefix for all resources
new Stack(app, "StacklineTakehome");
