import AboutVision from "../../componentsAbout/AboutVision";
import AboutHeader from "../../componentsAbout/AboutHeader";
import ServiceGrid from "../../componentsAbout/ServiceGrid";
import DriveUs from "../../componentsAbout/DriveUs";
import Team from "../../componentsAbout/Team";
import Accreditations from "../../componentsAbout/Accreditations";
import Newsletter from "../../components/Newsletter";

function About() {
  return (
    <>
      <AboutHeader />
      <AboutVision />
      <ServiceGrid />
      <DriveUs />
      <Team />
      <Accreditations />
      <Newsletter />
    </>
  );
}

export default About;
