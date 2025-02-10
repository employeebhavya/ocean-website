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
              <p className="description">Silicon Lab, Hyderabad</p>
            </div>
            <h2 className="h2">
              Silicon Lab, <span className="description">Hyderabad</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Silicon Lab
              </li>
              <li>
                <strong>Location:</strong> Hyderabad, India
              </li>
              <li>
                <strong>Project Type:</strong> Corporate Facility – Civil &
                Interior Works
              </li>
              <li>
                <strong>Area:</strong> 1,00,000 sq. ft.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Overview:</h3>
            <p className="description">
              Ocean Lifespaces successfully delivered a modern, high-tech
              workspace for Silicon Lab, featuring advanced labs, superior
              acoustic solutions, and a stunning spiral staircase crafted from
              steel and teak wood.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              To create a cutting-edge corporate facility that blends
              architectural excellence with functionality, optimizing space for
              innovation and efficiency.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Designed a visually striking steel and teak wood spiral
                staircase.
              </li>
              <li>
                Integrated advanced acoustic solutions for a superior work
                environment.
              </li>
              <li>
                Developed precision-engineered labs with high-tech
                infrastructure.
              </li>
              <li>
                Managed seamless civil and interior works for timely execution.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>An iconic, high-performance corporate space.</li>
              <li>Enhanced functionality with optimized acoustics.</li>
              <li>State-of-the-art labs tailored for innovation.</li>
              <li>Client satisfaction through quality and efficiency.</li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project highlights Ocean Lifespaces&apos; expertise in
              delivering world-class corporate environments. Stay tuned for more
              transformative projects!
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
