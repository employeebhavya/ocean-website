import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function DesignAndBuild() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/li-1.png", text: "Enhance Ambiance" },
    { img: "/services/li-2.png", text: "Highlight Architectural Features" },
    { img: "/services/li-3.png", text: "Improve Functionality" },
    { img: "/services/li-4.png", text: "Energy Efficiency" },
    { img: "/services/li-5.png", text: "Enhance Aesthetics" },
  ];
  const page3Projects = [
    {
      imgSrc: "/services/design-slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/design-slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/design-slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];
  return (
    <>
      <HeaderInnerServices
        pageTitle="Design and Build"
        serviceTitle="Design and Build"
        mainDescription="Ever since inception, Ocean Lifespaces has taken pride in its portfolio of completed Civil, Design, Interior and Turnkey works."
        highlights={highlights}
        rightImage1="/services/design1.png"
        companyDescription1="We are Interior Design experts and our designs generated from the studios are the essence of artistry which has indeed earned an enormous goodwill in the area of interior design & build contracting."
        companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/design2.png"
        rightImage2="/services/design3.png"
        clientsList="Streamlining the project delivery through a single contract as a design and build solution, the team transforms its relationship with the clients into an alliance, which fosters collaboration and teamwork. United from the outset of every project, the team readily works to successfully complete a project faster, more cost effectively and with fewer changes. Some of our completed Design & Build projects have been developed for Cognizant, Ford, Thompson Reuters, IBM, Caterpillar, Synergy, Ajuba, Nestle, HLL, Wipro , Brigde i2i, Merck and more."
        transformationText="Transform your area with our design and accessory services, which combine expert advice and carefully chosen options to create a home that reflects your own style and personality."
      />
      <RecentProjects projects={page3Projects} />
      <Newsletter />
    </>
  );
}

export default DesignAndBuild;
