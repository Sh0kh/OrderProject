import AboutUs from "../Components/Home/components/AboutUs/AboutUs";
import AnimationText from "../Components/Home/components/AnimationText/AnimationText.jsx";
import JoinUs from "../Components/Home/components/JoinUs/JoinUs.jsx";
import ProjectsHome from "../Components/Home/components/Projects/Projects";
import Hero from "../Components/Home/Hero";
import Header from "../Header/Header";



export default function Home() {


    return (
        <div className="">
     <Hero/>
     <AboutUs/>
     <ProjectsHome/>
     <AnimationText/>
     <JoinUs/>
      </div>
    );
}
