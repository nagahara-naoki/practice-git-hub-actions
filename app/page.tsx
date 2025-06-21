import { AppVersion } from "../version";

export default function Home() {
  const v = AppVersion;
  return <div>HELLO! version:{v.toString()}</div>;
}
