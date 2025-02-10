/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";

function Page() {
  return (
    <section className="projectsInner">
      <div className="container">
        <div className="rowMainProjectsInner">
          <div className="rowProjectsInner">
            <div className="headerProjectsInner">
              <Link href="/projects">
                <span className="description">Our Projects</span>
              </Link>
              <LuChevronRight />
              <p className="description">KONE Project, Chennai</p>
            </div>
            <h2 className="h2">
              KONE Project, <span className="description">Chennai</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> KONE
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Civil, Interior, PEB, HVAC, and
                FAPA Works
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 7,00,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹400 Crore ($48.7 Million)
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces undertook the massive execution of the KONE
              project in Chennai, covering 7 lakh sq. ft. This large-scale
              development encompassed civil works, interiors, pre-engineered
              buildings (PEB), HVAC, and fire & life safety (FAPA) solutions.
              The project required precise coordination and advanced engineering
              techniques to create a world-class facility that aligns with
              KONE’s global standards.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The aim was to deliver a highly functional and technologically
              advanced facility with an emphasis on structural excellence,
              energy efficiency, and seamless integration of civil, mechanical,
              and interior elements.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Integrated Project Management: A coordinated execution plan
                covering civil construction, interiors, HVAC, and fire safety.
              </li>
              <li>
                High-Quality Infrastructure: Used advanced PEB structures and
                modern materials for enhanced durability and efficiency.
              </li>
              <li>
                Sustainability Focus: Implemented energy-efficient HVAC systems
                and safety-compliant fire protection mechanisms.
              </li>
              <li>
                Timely Execution: Managed large-scale operations while adhering
                to strict timelines and quality benchmarks.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>
                A state-of-the-art facility equipped with world-class
                infrastructure.
              </li>
              <li>
                Successfully delivered high-precision civil and interior works
                for optimal functionality.
              </li>
              <li>
                Implemented energy-efficient systems to enhance sustainability.
              </li>
              <li>
                Ensured a safe and future-ready workplace with cutting-edge HVAC
                and FAPA solutions.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Large-Scale Execution Expertise – Delivering a multi-faceted
                project with seamless integration.
              </li>
              <li>
                Precision and Efficiency – Ensuring top-quality construction and
                advanced building solutions.
              </li>
              <li>
                Sustainable and Safe Designs – Prioritizing energy efficiency
                and safety compliance.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The KONE project in Chennai is a testament to Ocean Lifespaces’
              expertise in delivering complex, large-scale developments with
              precision and excellence. This project reflects our ability to
              integrate engineering, technology, and innovation to create
              landmark infrastructure that meets global standards.
            </p>
          </div>
          <div className="row3ProjectsInner">
            <img src="/projectsOcean/pi2.png" alt="image" />
            <img src="/projectsOcean/pi3.png" alt="image" />
          </div>
          <div className="row4ProjectsInner">
            <img src="/projectsOcean/pi4.png" alt="image" />
            <img src="/projectsOcean/pi5.png" alt="image" />
          </div>
          <div className="row5ProjectsInner">
            <img src="/projectsOcean/pi6.png" alt="image" />
            <img src="/projectsOcean/pi7.png" alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
