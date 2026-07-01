const SKILLS = [
  "react",
  "node.js",
  "javascript",
  "typescript",
  "java",
  "python",
  "html",
  "css",
  "git",
  "sql",
  "mongodb",
  "express",
  "next.js",
  "tailwind",
  "rest api",
];

const normalizeText = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/reactjs/g, "react js")
    .replace(/react\.js/g, "react js")
    .replace(/nodejs/g, "node js")
    .replace(/node\.js/g, "node js")
    .replace(/nextjs/g, "next js")
    .replace(/next\.js/g, "next js")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const patterns: Record<string, RegExp> = {
  react: /\breact(\sjs)?\b/i,
  "node.js": /\bnode(\sjs)?\b/i,
  javascript: /\bjavascript\b/i,
  typescript: /\btypescript\b/i,
  java: /\bjava\b/i,
  python: /\bpython\b/i,
  html: /\bhtml\b/i,
  css: /\bcss\b/i,
  git: /\bgit\b/i,
  sql: /\bsql\b/i,
  mongodb: /\bmongodb\b/i,
  express: /\bexpress\b/i,
  "next.js": /\bnext(\sjs)?\b/i,
  tailwind: /\btailwind\b/i,
  "rest api": /\brest(ful)?\s*apis?\b/i,
};

export const extractKeywords = (text: string): string[] => {
  const normalized = normalizeText(text);

  return SKILLS.filter((skill) => {
    const pattern = patterns[skill];

    if (pattern) {
      return pattern.test(normalized);
    }

    return new RegExp(`\\b${skill}\\b`, "i").test(normalized);
  });
};