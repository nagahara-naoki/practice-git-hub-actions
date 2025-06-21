import { updateVersion } from "../version.js";
import fs from "fs";

const updateType = process.argv[2];
if (!updateType) {
  console.error("Please specify update type: major, minor, or patch");
  process.exit(1);
}

let newVersion;
switch (updateType.toLowerCase()) {
  case "major":
    newVersion = updateVersion.major();
    break;
  case "minor":
    newVersion = updateVersion.minor();
    break;
  case "patch":
    newVersion = updateVersion.patch();
    break;
  default:
    console.error("Invalid update type. Use: major, minor, or patch");
    process.exit(1);
}

console.log(`Version updated to: ${newVersion}`);

// version.jsのバージョン固定値を書き換える
const versionFile = new URL("../version.js", import.meta.url).pathname;
const fileContent = fs.readFileSync(versionFile, "utf-8");
const newContent = fileContent.replace(
  /const \[major, minor, patch\] = ".*"\.split\("\."\)\.map\(Number\);/,
  `const [major, minor, patch] = "${newVersion}".split(".").map(Number);`
);
fs.writeFileSync(versionFile, newContent, "utf-8");
console.log("version.js updated!");
