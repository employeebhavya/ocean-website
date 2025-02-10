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
                Ground Floor Lobby Works – Taramani, Chennai
              </p>
            </div>
            <h2 className="h2">
              Ground Floor Lobby Works –{" "}
              <span className="description">Taramani, Chennai</span>
            </h2>
          </div>
          <div className="row1ProjectsInner">
            <img src="/projectsOcean/pi1.png" alt="image" />
          </div>
          <div className="pageHeader">
            <ul>
              <li>
                <strong>Client:</strong> Leading Grade A Developer
              </li>
              <li>
                <strong>Location:</strong> Taramani, Chennai, India
              </li>
              <li>
                <strong>Project Type:</strong> Design & Build – Ground Floor
                Lobby Works
              </li>
              <li>
                <strong>Duration:</strong> Ongoing
              </li>
              <li>
                <strong>Area:</strong> 30,000 sq. ft.
              </li>
              <li>
                <strong>Value:</strong> Confidential
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Project Overview:</h3>
            <p className="description">
              Ocean Lifespaces is proud to undertake the design and build of a
              premium ground floor lobby for a prestigious Grade A developer in
              Taramani, Chennai. This project exemplifies our expertise in
              combining architectural creativity with precise execution to craft
              an inviting and sophisticated lobby space.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Objective:</h3>
            <p className="description">
              To design and construct a world-class lobby that reflects
              elegance, functionality, and innovation, setting a new benchmark
              in architectural excellence for corporate spaces.
            </p>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Approach:</h3>
            <ul>
              <li>
                Innovative Design: Aesthetically driven concept balancing
                grandeur with modern efficiency.
              </li>
              <li>
                Premium Materials: Use of high-quality finishes to enhance
                durability and visual appeal.
              </li>
              <li>
                Seamless Execution: Integration of design and build processes
                for a streamlined project flow.
              </li>
              <li>
                Sustainable Solutions: Incorporating eco-friendly materials and
                energy-efficient lighting.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Expected Results:</h3>
            <ul>
              <li>
                A visually stunning, high-end lobby that enhances the building’s
                identity.
              </li>
              <li>
                A welcoming and functional space designed for seamless movement
                and engagement.
              </li>
              <li>
                Integration of sustainable and energy-efficient solutions.
              </li>
              <li>
                A successful, on-time execution aligning with client
                expectations.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Key Takeaways:</h3>
            <ul>
              <li>
                A landmark project combining innovation, functionality, and
                luxury.
              </li>
              <li>
                Efficient execution through an integrated design-build approach.
              </li>
              <li>
                A space that enhances the user experience and overall property
                value.
              </li>
            </ul>
          </div>
          <div className="row2ProjectsInner">
            <h3 className="h4 dark">Conclusion:</h3>
            <p className="description">
              This project is a testament to Ocean Lifespaces ability to
              redefine corporate interiors with cutting-edge design and flawless
              execution. Stay tuned as we bring this vision to life!
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
