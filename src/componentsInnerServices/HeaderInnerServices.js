/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./HeaderInnerServices.module.css";
import { LuChevronRight } from "react-icons/lu";

function HeaderInnerServices({
  pageTitle,
  serviceTitle,
  mainDescription,
  highlights,
  rightImage1,
  companyDescription1,
  companyDescription2,
  leftImage2,
  rightImage2,
  clientsList,
  transformationText,
}) {
  return (
    <section className={styles.headerInnerServices}>
      <div className="container">
        <div className={styles.rowMainHeaderInnerServices}>
          <div className={styles.rowHeaderInnerServices}>
            <div className={styles.breadcrumbInnerServices}>
              <Link href="/services">
                <span className="description">Our Services</span>
              </Link>
              <LuChevronRight />
              <p className="description">{pageTitle}</p>
            </div>
            <h2 className="h2">{serviceTitle}</h2>
            <p className="description">{mainDescription}</p>
          </div>
          <div className={styles.row1HeaderInnerServices}>
            <div className={styles.columnRow1Is}>
              <h3 className="h3">Sub Services: {pageTitle}</h3>
              <ul>
                {highlights.map((highlight, index) => (
                  <li key={index}>
                    <img src={highlight.img} alt="image" />
                    <span>{highlight.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.columnRow1Is}>
              <img src={rightImage1} alt="image" />
            </div>
          </div>
          <div className={styles.row2HeaderInnerServices}>
            <p className="description">{companyDescription1}</p>
            <p className="description">{companyDescription2}</p>
          </div>
          <div className={styles.row3HeaderInnerServices}>
            <div className={styles.columnRow3Is}>
              <img src={leftImage2} alt="image" />
              <p className="description">{clientsList}</p>
            </div>
            <div className={styles.columnRow3Is}>
              <img src={rightImage2} alt="image" />
              <p className="description">{transformationText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderInnerServices;
