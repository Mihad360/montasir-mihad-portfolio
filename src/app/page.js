import ColsAni from "./components/ColsAni";
import Banner from "./components/homepages/Banner";
import ResumeCv from "./components/homepages/ResumeCv";

export default function Home() {
  return (
    <div>
      <div className="pb-12"><Banner></Banner></div>
      <div><ResumeCv></ResumeCv></div>
      <div><ColsAni></ColsAni></div>
    </div>
  );
}
