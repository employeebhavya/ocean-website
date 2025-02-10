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
              <p className="description">
                Bray Controls India Pvt. Ltd., Chennai
              </p>
            </div>
            <h2 className="h2">
              Bray Controls India Pvt. Ltd.,{" "}
              <span className="description">Chennai</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Bray Controls India Pvt. Ltd.
              </li>
              <li>
                <strong>Location:</strong> Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Industrial Facility
              </li>
              <li>
                <strong>Duration:</strong> 6 Months
              </li>
              <li>
                <strong>Area:</strong> 30,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> ₹9.12 Crore
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Overview:</h3>
            <p className="description">
              Ocean Lifespaces takes pride in the successful completion of the
              Bray Controls India Pvt. Ltd. facility in Chennai. This project
              aimed to develop a cutting-edge industrial space that enhances
              operational efficiency and fosters innovation in manufacturing and
              business processes.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              The primary goal was to design and execute a modern, functional
              workspace that supports productivity while integrating efficient
              spatial planning and sustainable elements.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Strategic Planning: Collaborated with Bray Controls India to
                align with their operational requirements and vision.
              </li>
              <li>
                Innovative Design: Created an optimized layout to enhance
                workflow and productivity while ensuring compliance with
                industry standards.
              </li>
              <li>
                Timely Execution: Adhered to a stringent 6-month timeline,
                managing resources effectively to ensure seamless project
                delivery.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Results:</h3>
            <ul>
              <li>
                State-of-the-Art Infrastructure: The facility now features
                modern workspaces and manufacturing areas tailored for
                efficiency and growth.
              </li>
              <li>
                Enhanced Productivity: The design and layout optimize workflow,
                improving overall operational efficiency.
              </li>
              <li>
                Client Satisfaction: Bray Controls India was highly pleased with
                the outcome, highlighting our ability to deliver quality within
                the given timeframe and budget.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                Successfully executed a high-value industrial project within 6
                months.
              </li>
              <li>
                Focused on client collaboration to meet specific operational
                needs.
              </li>
              <li>
                Achieved a balance between functionality, efficiency, and
                sustainability.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project stands as a testament to Ocean Lifespaces&apos;
              expertise in delivering high-quality industrial spaces that drive
              productivity and innovation.
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
