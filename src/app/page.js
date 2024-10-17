import Image from "next/image";
import Banner from "./components/homepages/Banner";
import ResumeCv from "./components/homepages/ResumeCv";

export default function Home() {
  return (
    <div>
      <div><Banner></Banner></div>
      <div><ResumeCv></ResumeCv></div>
    </div>
  );
}
