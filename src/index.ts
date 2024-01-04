#!/usr#!/usr/bin/env npx -y tsx
import { merge } from "allof-merge";
import * as fs from "fs";
import spec from "./spec";

console.log(spec);

console.log("=".repeat(80));

const onMergeError = (msg: string | undefined) => {
	throw new Error(msg);
};

const merged = merge(spec, {onMergeError});

console.log(merged);
fs.writeFileSync("./merged.json", JSON.stringify(merged, null, "\t"));
