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
              <p className="description">HDFC Office, Chennai</p>
            </div>
            <h2 className="h2">
              HDFC Office, <span className="description">Chennai</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> HDFC
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Corporate Office – Interior,
                Electrical & IBMS Works
              </li>
              <li>
                <strong>Area:</strong> 2,50,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully delivered a modern, high-tech
              workspace for HDFC in Chennai, integrating advanced interiors,
              electrical systems, and smart IBMS solutions to enhance efficiency
              and functionality.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              To create a seamless, technology-driven workspace that boosts
              productivity and aligns with HDFC’s corporate vision.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Designed optimized interiors for collaboration and efficiency.
              </li>
              <li>Installed state-of-the-art electrical systems.</li>
              <li>
                Integrated IBMS for automation, security, and energy efficiency.
              </li>
              <li>Ensured smooth execution with meticulous planning.</li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>A cutting-edge, future-ready corporate office.</li>
              <li>Enhanced energy efficiency and reliability.</li>
              <li>Smart IBMS solutions for automation and security.</li>
              <li>
                Successfully met client expectations with precision and quality.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This milestone project reflects Ocean Lifespaces expertise in
              delivering high-performance corporate environments. Stay tuned for
              more transformative projects!
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
