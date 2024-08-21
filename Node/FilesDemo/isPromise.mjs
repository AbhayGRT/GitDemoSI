import * as fs from "fs/promises";
import { join } from "path";
const filepath = join(process.cwd(), "file.txt");
async function run() {
  try {
    console.log("Reading File");
    const contents = await fs.readFile(filepath, "utf8");
    console.log("File contents" + contents);
  } catch (error) {
    console.log(error);
  }
}
run();