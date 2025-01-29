import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function InfrastructureDevelopment() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/li-1.png", text: "Transportation Infrastructure" },
    { img: "/services/li-2.png", text: "Utilities & Water Management" },
    { img: "/services/li-3.png", text: "Energy Infrastructure" },
    { img: "/services/li-4.png", text: "Urban Infrastructure" },
    { img: "/services/li-5.png", text: "Marine Infrastructure Development" },
  ];

  const page5Projects = [
    {
      imgSrc: "/services/marine-slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/marine-slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/marine-slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];

  return (
    <>
      <HeaderInnerServices
        pageTitle="Infrastructure Development"
        serviceTitle="Infrastructure Development"
        mainDescription="Innovative Infrastructure Solutions for a Sustainable Future."
        highlights={highlights}
        rightImage1="/services/marine1.png"
        companyDescription1="Ocean leads the way in infrastructure development, offering cutting-edge solutions for both urban and rural projects. Our focus is on building sustainable, long-lasting infrastructure that supports growth, improves quality of life, and enhances economic development. We specialize in transportation, utilities, and energy infrastructure, ensuring that all projects contribute to a better future."
        // companyDescription2="Having achieved a dominant position in the industry and having won the heart of numerous clients, Ocean has gathered all its expertise and grabbed opportunities for innovation and faster project delivery as one unified flow of work from initial concept through completion."
        leftImage2="/services/marine2.png"
        rightImage2="/services/design3.png"
        clientsList="Our infrastructure solutions include everything from road construction and utilities to energy distribution and urban planning. We are committed to integrating sustainable practices in every project to minimize environmental impact while ensuring that the infrastructure we build is robust and future-ready."
        transformationText="Transform your area with our design and accessory services, which combine expert advice and carefully chosen options to create a home that reflects your own style and personality."
      />
      <RecentProjects projects={page5Projects} />
      <Newsletter />
    </>
  );
}

export default InfrastructureDevelopment;
