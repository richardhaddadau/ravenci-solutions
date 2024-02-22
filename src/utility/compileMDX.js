import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";

async function compileMDX(mdxPath) {
  const mdxSource = fs.readFileSync(
    path.join(process.cwd(), "mdx", mdxPath),
    "utf-8",
  );
  return await bundleMDX({ source: mdxSource });
}

export default compileMDX;
