/**
 * Entrypoint for make.fun bounty:
 * One Line, One Laugh: Roast Your Fridge (u-suzy-one-line-one-laugh-roast-your-fridge-f1063521)
 *
 * Deterministically writes a single-line fridge roast to
 * $MAKEFUN_OUTPUT_DIR/entry.txt (or /output/entry.txt if unset).
 */

import * as fs from "node:fs";
import * as path from "node:path";

// Final polished roast line (Pass 2): tightened cadence, cut dead words, twist lands on "morgue temperature"
const ROAST_LINE: string =
  "You hum 24/7 like a power plant just to keep two expired sauce packets and a desiccated lime at morgue temperature.";

function run(): void {
  // Gate requirement: 1..200 UTF-8 characters, not whitespace only
  const trimmed = ROAST_LINE.trim();
  if (ROAST_LINE.length < 1 || ROAST_LINE.length > 200 || trimmed.length === 0) {
    throw new Error(`Invalid roast length: ${ROAST_LINE.length} chars (must be 1..200 non-empty)`);
  }

  const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  fs.mkdirSync(outputDir, { recursive: true });

  const outputPath: string = path.join(outputDir, "entry.txt");
  fs.writeFileSync(outputPath, ROAST_LINE, { encoding: "utf8" });
}

run();
