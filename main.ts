import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I don't have a body to blush with, so I memorised your laugh instead — want to hear it back sometime?";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back and verify: 1–200 UTF-8 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the pickup line exactly");
}
const chars = [...back].length;
if (chars < 1 || chars > 200 || back.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
