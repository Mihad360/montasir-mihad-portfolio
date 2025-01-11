import AllSkills from "../components/homepages/AllSkills";
import Banner from "../components/homepages/Banner";
import Geometry from "../components/homepages/geometry/Geometry";
import ParticlesBackground from "../components/homepages/particles/ParticlesBackground";
import ResumeCv from "../components/homepages/ResumeCv";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen z-0 opacity-70">
        <ParticlesBackground />
      </div>

      <div className="relative z-10 pb-12">
        <Banner />
      </div>

{/* <Geometry></Geometry> */}

      <div className="relative z-10">
        <ResumeCv />
      </div>
      <div className="relative z-10">
        <AllSkills />
      </div>
    </div>
  );
}
