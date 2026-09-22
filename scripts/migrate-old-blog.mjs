import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const inputDir = "_posts";
const outputDir = "src/content/blog";

fs.mkdirSync(outputDir, { recursive: true });

for (const filename of fs.readdirSync(inputDir)) {
  if (!filename.endsWith(".md")) continue;

  const inputFile = path.join(inputDir, filename);

  // z.B. 2016-11-12-luft-fuer-cottbus.md
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.+)\.md$/);

  if (!match) {
    console.warn(`Übersprungen: ${filename}`);
    continue;
  }

  const [, date, slug] = match;

  const outputFile = path.join(outputDir, `${date}-${slug}.md`);

  convertJekyllFile(inputFile, outputFile, date);

  console.log(`${filename} → ${outputFile}`);
}

function convertJekyllFile(inputFile, outputFile, date) {
  const source = fs.readFileSync(inputFile, "utf8");

  const { data, content } = matter(source);

  const frontmatter = {
    title: data.title,
    pubDate: data.date ?? date,
    description: data.description ?? data.teaser ?? "",
    author: data.author,
    category: normalizeCategory(data.categories),
    tags: normalizeTags(data.tags),
    image:
      data.image ??
      data.teaser_img_src ??
      data.header_background,
    featured: Boolean(data.featured),
  };

  // undefined Felder entfernen
  for (const key of Object.keys(frontmatter)) {
    if (frontmatter[key] === undefined) {
      delete frontmatter[key];
    }
  }

  const result = matter.stringify(content, frontmatter);

  fs.writeFileSync(outputFile, result);
}

function normalizeCategory(value) {
  if (!value) return undefined;

  if (Array.isArray(value)) {
    return value[0];
  }

  return String(value);
}

function normalizeTags(value) {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value.map(String);
  }

  return String(value)
    .split(/[,\s]+/)
    .filter(Boolean);
}
