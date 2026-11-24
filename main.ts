// One Line, One Chill — make.fun one-liner entry.
// The joke: a one-sentence horror story. The transplant went fine,
// but the new heart beats in Morse code — and last night it spelled
// out "let me out". The program writes that one line, and only that
// line, to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// locally). Node 22, standard library only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The transplant was a success, but my new heart beats in Morse code, and last night it spelled out: 'let me out'.";

// The competition requires exactly one line of 1-200 characters.
// Fail loudly instead of writing an invalid entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  console.error(
    `Invalid entry line: expected a single line of 1-200 characters, got ${LINE.length} characters.`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
