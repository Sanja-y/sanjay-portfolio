import Head from "next/head";
import Link from "next/link";
// https://youtu.be/qSc_sjKBdX0?si=I02RU3_yTynLfpmC&t=144
import { api } from "~/utils/api";
import {
  Navbar,
  HomeSection,
  AboutMe,
  FollowMe,
  Projects,
  Skills,
  Contact,
  Footer
} from "../components/index"
export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <div className="bg-[#161515]  font-montserrat w-full h-full px-[10rem] py-8 ">
        <div className="text-[#fff8f8] font-semibold w-full">
          <Navbar />
          <div className="px-[10rem]">
            <HomeSection />
            <AboutMe />
            <Skills />
            <Projects />
            <Contact /> 
            {/* <FollowMe /> */}
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
