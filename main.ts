// One Line, One Chill: writes the entry line to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The transplant was a success, but my new heart beats in Morse code, and last night it spelled out: 'let me out'.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
