import path from "node:path";
import { fileURLToPath } from "node:url";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import sharp from "sharp";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  admin: {
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  editor: lexicalEditor(),
  collections: [],
  secret: process.env.PAYLOAD_SECRET || "",
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || "",
  }),

  sharp,
});
