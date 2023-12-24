#!/usr/bin/env node

import * as cdk from "aws-cdk-lib";
import { SiteStack } from "./site-stack";
import { StorybookStack } from "./storybook-stack";

const app = new cdk.App();

// the id here is used as a prefix for all resources
new SiteStack(app, "StacklineTakehome");

new StorybookStack(app, "StacklineTakehomeStorybook");
