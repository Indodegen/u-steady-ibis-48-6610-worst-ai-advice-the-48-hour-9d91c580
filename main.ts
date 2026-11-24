// Worst AI Advice entry: copy entry.txt to the output dir, stdout stays silent.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, isAbsolute, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const rawOut = process.env.MAKEFUN_OUTPUT_DIR;
const outDir = rawOut
  ? isAbsolute(rawOut)
    ? rawOut
    : join(dir, rawOut)
  : join(dir, "out");
mkdirSync(outDir, { recursive: true });
copyFileSync(join(dir, "entry.txt"), join(outDir, "entry.txt"));
