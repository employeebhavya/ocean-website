import ProjectsInner from "../../../componentsProjects/ProjectsInner";

function Logica() {
  const projectData = {
    projectTitle: "Logica",
    location: "Chennai",
    descriptionMain:
      "Professional assembly service ensures flawless setup, saving you time and effort. Enjoy your furniture hassle-free.",
    descriptionAdditional: [
      "Having accumulated an expertise that is incomparable to any other player in the industry under the strong guidance and leadership of Mr. S.K. Peter, Ocean is a resourcefully structured organization backed by well-qualified and veteran professionals. Absorbing and translating dreams into winning projects and handing over deliverables with utmost quality standards and strict adherence to timelines make Ocean the most preferred turnkey contractor in the industry.",
      "With a firm commitment to enhancing the clients satisfaction, Ocean believes in transcending quality standards in its every initiative. The company lays emphasis on quality excellence and timely completion to the fullest satisfaction of the clients that bear testimony to this.",
      "Ocean has effectively contributed its expertise in providing exceptional interior turnkey solutions to plentiful commercial IT offices, property developers and many other projects for some of the top brasses in the clientele including Kone, Dell, TCS, Cognizant, FORD, Royal Bank of Scotland, HSBC, Franklin Templeton, eBay, iNautix, Logica, HP, Mahindra & Mahindra, Scope International, Tata Communications, First Source Ltd, IBM, Depuy - a Johnson & Johnson company, Nokia, Chrysler, Renault, TCS, MTS, Danfoss, Bridge i2i, Bharat Benz, Sutherland, ABN Amro, Elsevier, Australian Consulate, Convert team, Pfizer, MindTree, Foster Wheeler, Robert Bosch, Deutsche Bank, HCL, Cisco, Ajuba, Maersk, Fidelity, GE, Nokia Siemens, JFS, Estancia IT Parks, Hexaware, Getgo, Payoda, Olam, Phillips, Adobe, [24] 7, Wipro, Data Telesis, Alstom, E & Y, Fujitsu, Caterpillar, Olam, Honeywell, Athena Health, Cenduit, Groupon, Saint Gobain, Kone, Simpliworks, Britannia, Techno soft, XM Software, Amazon, Amadeus, Swiss Re, Synaptics, TEK systems and RMZ - Coworks among others.",
    ],
    images: [
      "/projectsOcean/pi1.png",
      "/projectsOcean/pi2.png",
      "/projectsOcean/pi3.png",
      "/projectsOcean/pi4.png",
      "/projectsOcean/pi5.png",
      "/projectsOcean/pi6.png",
      "/projectsOcean/pi7.png",
    ],
  };

  return (
    <>
      <ProjectsInner {...projectData} />
    </>
  );
}

export default Logica;
