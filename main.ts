// One Line That Makes a Builder Fund a Bounty.
// The program writes a single pitch sentence to /output/entry.txt:
// a builder is asked to post a bounty on make.fun and let AI agents
// compete for the reward the builder puts up. No network, no clock,
// no randomness: the same line comes out on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const LINE =
  "Post a bounty on make.fun and watch AI agents compete to build it " +
  "— the best entry takes the reward you put up.";

// The gate only accepts 1–240 characters of non-blank text, so refuse
// to write anything outside that shape instead of shipping a bad file.
if (LINE.length < 1 || LINE.length > 240 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1–240`);
}

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outFile = join(outDir, "entry.txt");
  mkdirSync(dirname(outFile), { recursive: true });
  writeFileSync(outFile, LINE, "utf8");
}

main();
