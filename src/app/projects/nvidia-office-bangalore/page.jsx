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
              <p className="description">Nvidia Office, Bangalore</p>
            </div>
            <h2 className="h2">
              Nvidia Office, <span className="description">Bangalore</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Nvidia
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
                <strong>Area:</strong> 2,50,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> Confidential
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully executed the interior fit-out of
              five floors at Nvidia’s Bangalore office, each designed with a
              unique concept. The project featured a stunning double-height
              reception, customized cladding, flooring, and ceiling materials
              for every level, making this workspace a visual and functional
              masterpiece.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The goal was to create a cutting-edge corporate space that
              reflects Nvidia’s innovation-driven culture, integrating high-end
              design elements while ensuring optimal functionality and
              sustainability.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Bespoke Design Concepts: Each floor was crafted with a unique
                identity using distinct materials and finishes.
              </li>
              <li>
                Architectural Excellence: Designed a double-height reception to
                create a grand first impression.
              </li>
              <li>
                Material Innovation: Incorporated premium cladding, flooring,
                and ceiling materials to enhance aesthetics and durability.
              </li>
              <li>
                Precision Execution: Managed large-scale operations with
                meticulous planning to maintain quality and efficiency.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>
                A visually stunning and functionally superior corporate
                workspace.
              </li>
              <li>
                Each floor reflects unique design elements, creating a dynamic
                and engaging environment.
              </li>
              <li>
                Successful execution of a large-scale project with precision and
                creativity.
              </li>
              <li>
                A workplace that enhances collaboration, efficiency, and brand
                identity.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Customization at Scale – Delivering distinct themes across
                multiple floors while maintaining brand synergy.
              </li>
              <li>
                Seamless Execution – Ensuring timely and high-quality delivery
                across a vast area.
              </li>
              <li>
                Architectural Innovation – Creating signature elements like the
                double-height reception to enhance brand presence.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              The Nvidia Bangalore office project highlights Ocean Lifespaces’
              ability to execute large-scale corporate interiors with
              innovation, precision, and creativity. This project sets a new
              benchmark in workspace design, proving that visionary ideas, when
              executed flawlessly, create lasting impact.
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
