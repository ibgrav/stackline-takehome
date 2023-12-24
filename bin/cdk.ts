#!/usr/bin/env node

import { existsSync, mkdirSync } from "fs";
import * as cdk from "aws-cdk-lib";
import { SiteStack, siteAssetDir } from "./site-stack";
import { StorybookStack, storybookAssetDir } from "./storybook-stack";

// The BucketDeployment requires that the directory exists, even if the app is not being deployed.
if (!existsSync(siteAssetDir)) mkdirSync(siteAssetDir);
if (!existsSync(storybookAssetDir)) mkdirSync(storybookAssetDir);

const app = new cdk.App();

// the id here is used as a prefix for all resources
new SiteStack(app, "StacklineTakehome");

new StorybookStack(app, "StacklineTakehomeStorybook");
