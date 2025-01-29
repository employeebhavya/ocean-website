import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function TurkneySolutions() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/li-1.png", text: "Design and Conceptualization" },
    { img: "/services/li-2.png", text: "Procurement and Sourcing" },
    { img: "/services/li-3.png", text: "Project Management" },
    { img: "/services/li-4.png", text: "General Contracting Works" },
    { img: "/services/li-5.png", text: "Interior Works" },
    { img: "/services/li-1.png", text: "Construction & Execution" },
    { img: "/services/li-2.png", text: "Final Handover" },
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
        pageTitle="Turnkey Solutions"
        serviceTitle="Turnkey Solutions"
        mainDescription="Complete Turnkey Solutions for Seamless Project Execution"
        highlights={highlights}
        rightImage1="/services/design1.png"
        companyDescription1="Ocean provides comprehensive turnkey solutions, handling every aspect of your project from initial concept to final completion. Our team works closely with you to ensure that your project is executed seamlessly, meeting your specific requirements, timelines, and budget. Whether it's a new build or a renovation, we guarantee a hassle-free experience with a focus on high-quality results and effective project management."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/design2.png"
        rightImage2="/services/design3.png"
        clientsList="Our turnkey approach takes the burden off your shoulders, managing everything from procurement to construction and final handover. This ensures that your project runs smoothly and delivers the expected results with minimal disruption to your operations. We prioritize safety, efficiency, and environmental sustainability in every project, ensuring that every detail is meticulously managed."
        transformationText="Transform your area with our design and accessory services, which combine expert advice and carefully chosen options to create a home that reflects your own style and personality."
      />
      <RecentProjects projects={page3Projects} />
      <Newsletter />
    </>
  );
}

export default TurkneySolutions;
