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
              <p className="description">Tek Systems, Bangalore</p>
            </div>
            <h2 className="h2">
              Tek Systems, <span className="description">Bangalore</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Tek Systems
              </li>
              <li>
                <strong>Location:</strong> Bangalore, India
              </li>
              <li>
                <strong>Project Type:</strong> Corporate Interior Fit-Out
              </li>
              <li>
                <strong>Duration:</strong> Confidential
              </li>
              <li>
                <strong>Area:</strong> 42,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹4 Crore
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully delivered a high-end corporate
              workspace for Tek Systems in Bangalore. Designed to inspire
              productivity and collaboration, this 42,000 sq. ft. project was
              meticulously planned and executed to reflect the client’s vision
              for a modern, functional, and dynamic office environment.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The goal was to create a sophisticated and efficient workspace
              that enhances employee well-being and operational efficiency while
              integrating premium design elements and cutting-edge
              infrastructure.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Client Collaboration: Worked closely with Tek Systems to align
                the design with their corporate identity and workspace needs.
              </li>
              <li>
                Innovative Design: Focused on open-plan layouts, ergonomic
                workstations, and collaborative spaces.
              </li>
              <li>
                Quality Execution: Ensured top-notch material selection and
                craftsmanship to meet high industry standards.
              </li>
              <li>
                Timely Delivery: Managed the project with precision to stay
                within budget and deadlines.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>
                A modern, efficient, and aesthetically appealing office space.
              </li>
              <li>
                Enhanced workplace functionality with innovative layouts and
                well-designed interiors.
              </li>
              <li>
                Seamless execution, ensuring on-time completion within the
                allocated budget.
              </li>
              <li>
                A satisfied client with a workspace that supports creativity and
                productivity.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Strategic Planning ensures quality execution within defined
                timelines.
              </li>
              <li>
                A Client-Centric Approach results in tailored solutions that
                reflect business values.
              </li>
              <li>
                Attention to Detail plays a crucial role in delivering high-end
                corporate interiors.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Tek Systems project stands as a testament to Ocean Lifespaces’
              expertise in delivering premium office interiors that enhance
              productivity and innovation. We take pride in shaping workspaces
              that drive success and look forward to more transformative
              projects in the future.
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
