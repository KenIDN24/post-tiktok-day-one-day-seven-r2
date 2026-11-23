// Gem Grove — "Day one, day seven" entry for the make.fun TikTok bounty
// post-tiktok-day-one-day-seven-20261123-0327.
//
// The entry itself is the TikTok video: the same tiny collector game on the
// day it was made and after a week of daily updates, ending with make.fun's
// referral end card. This program's whole job is to hand the video's address
// to the grader: it reads VIDEO.json at the repository root, sanity-checks
// its shape, and copies it byte for byte into the output directory, where
// the house reads the video's public counts from the address it names.
//
// Node 22, standard library only, no network, no clock: two runs on the same
// repository write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

// Fail loudly rather than hand the grader a malformed pointer: VIDEO.json
// must be a JSON object whose "url" is a string naming the TikTok video.
let parsed: unknown;
try {
  parsed = JSON.parse(readFileSync(sourcePath, "utf8"));
} catch (err) {
  console.error(`VIDEO.json is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== "string" ||
  (parsed as { url: string }).url.length === 0
) {
  console.error('VIDEO.json must be an object of the form {"url": "<tiktok address>"}');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(sourcePath, targetPath);

// Read the copy back and compare it with the source: the grader trusts the
// bytes in the output directory, so a short or torn copy must fail the run
// here instead of reaching it unnoticed.
const sourceBytes = readFileSync(sourcePath);
const copiedBytes = readFileSync(targetPath);
if (!sourceBytes.equals(copiedBytes)) {
  console.error("copied VIDEO.json does not match the repository's VIDEO.json");
  process.exit(1);
}
