/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./projects.module.css";
import { MdOutlineArrowRightAlt } from "react-icons/md";

function Projects() {
  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.rowMainProjects}>
          <h2 className="h2">Our Projects</h2>
          <div className={styles.row1Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p1.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p2.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row2Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p3.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p5.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p3.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row3Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p6.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.row4Projects}>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p7.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
            <div className={styles.columnProjects}>
              <img src="/projectsOcean/p8.png" alt="image" />
              <div className={styles.content}>
                <h3 className="h3">Logica</h3>
                <p className="description">
                  Chennai | Area - 3,50,000 sq ft | Cost: 99.68 Cr
                </p>
                <Link href="/projects/dell-project-bangalore">
                  <span> Learn More</span> <MdOutlineArrowRightAlt />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
