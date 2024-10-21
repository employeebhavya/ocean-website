import RecentProjects from "../../../componentsInnerServices/RecentProjects";
import HeaderInnerServices from "../../../componentsInnerServices/HeaderInnerServices";
import Newsletter from "../../../components/Newsletter";

function InteriorDesign() {
  // Define the dynamic content here
  const highlights = [
    { img: "/services/li-1.png", text: "Enhance Ambiance" },
    { img: "/services/li-2.png", text: "Highlight Architectural Features" },
    { img: "/services/li-3.png", text: "Improve Functionality" },
    { img: "/services/li-4.png", text: "Energy Efficiency" },
    { img: "/services/li-5.png", text: "Enhance Aesthetics" },
  ];
  const page1Projects = [
    {
      imgSrc: "/services/slide-1.png",
      title: "Project One",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/slide-2.png",
      title: "Project Two",
      location: "Chennai, India",
    },
    {
      imgSrc: "/services/slide-1.png",
      title: "Project Three",
      location: "Chennai, India",
    },
  ];
  return (
    <>
      <HeaderInnerServices
        pageTitle="Interior Design"
        serviceTitle="Interior Design"
        mainDescription="Professional assembly service ensures flawless setup, saving you time and effort. Enjoy your furniture hassle-free."
        highlights={highlights}
        rightImage1="/services/row1-right.png"
        companyDescription1="Having accumulated an expertise that is incomparable to any other player in the industry under the strong guidance and leadership of Mr. S.K. Peter, Ocean is a resourcefully structured organization backed by well-qualified and veteran professionals. Absorbing and translating dreams into winning projects and handing over deliverables with utmost quality standards and strict adherence to timelines make Ocean the most preferred turnkey contractor in the industry."
        companyDescription2="With a firm commitment to enhancing the clients’ satisfaction, Ocean believes in transcending quality standards in its every initiative. The company lays emphasis on quality excellence and timely completion to the fullest satisfaction of the clients that bear testimony to this."
        leftImage2="/services/row3-left.png"
        rightImage2="/services/row3-right.png"
        clientsList="Ocean has effectively contributed its expertise in providing exceptional interior turnkey solutions to plentiful commercial IT offices, property developers and many other projects for some of the top brasses in the clientele including Kone, Dell, TCS, Cognizant, FORD, Royal Bank of Scotland, HSBC, Franklin Templeton, eBay, iNautix, Logica, HP, Mahindra & Mahindra, Scope International, Tata Communications, First Source Ltd, IBM, Depuy - a Johnson & Johnson company, Nokia, Chrysler, Renault, TCS, MTS, Danfoss, Bridge i2i, Bharat Benz, Sutherland, ABN Amro, Elsevier, Australian Consulate, Convert team, Pfizer, MindTree, Foster Wheeler, Robert Bosch, Deutsche Bank, HCL, Cisco, Ajuba, Maersk, Fidelity, GE, Nokia Siemens, JFS, Estancia IT Parks, Hexaware, Getgo, Payoda, Olam, Phillips, Adobe, [24] 7, Wipro, Data Telesis, Alstom, E & Y, Fujitsu, Caterpillar, Olam, Honeywell, Athena Health, Cenduit, Groupon, Saint Gobain, Kone, Simpliworks, Britannia, Techno soft, XM Software, Amazon, Amadeus, Swiss Re, Synaptics, TEK systems and RMZ - Coworks among others."
        transformationText="Transform your area with our design and accessory services, which combine expert advice and carefully chosen options to create a home that reflects your own style and personality."
      />
      <RecentProjects projects={page1Projects} />
      <Newsletter />
    </>
  );
}

export default InteriorDesign;
