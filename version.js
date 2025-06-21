// セマンティックバージョニングの管理
const [major, minor, patch] = "1.0.0".split(".").map(Number);

export const AppVersion = {
  major,
  minor,
  patch,
  toString() {
    return `${this.major}.${this.minor}.${this.patch}`;
  },
};

export const updateVersion = {
  major: () => {
    AppVersion.major += 1;
    AppVersion.minor = 0;
    AppVersion.patch = 0;
    return AppVersion.toString();
  },
  minor: () => {
    AppVersion.minor += 1;
    AppVersion.patch = 0;
    return AppVersion.toString();
  },
  patch: () => {
    AppVersion.patch += 1;
    return AppVersion.toString();
  },
};

// バージョン情報を出力
console.log("Current version:", AppVersion.toString());
