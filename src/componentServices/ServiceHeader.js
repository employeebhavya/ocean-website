/* eslint-disable @next/next/no-img-element */
import LogoScroll from "../components/LogoScroll";
import DraggableSlider from "./DraggableSlider";
import styles from "./ServiceHeader.module.css";

function ServiceHeader() {
  return (
    <>
      <section className={styles.serviceHead}>
        <div className="container">
          <div className={styles.mainRowServiceHead}>
            <div className={styles.rowServiceHead}>
              <h3 className="h3">Our Services</h3>
              <img src="/services/head-inner.png" alt="image" />
              <p className="description">
                We excel in innovation and problem-solving, transforming
                challenges that get into boundless possibilities.
              </p>
            </div>
          </div>
        </div>
        <DraggableSlider />
      </section>
      <section className={styles.logoScroll}>
        <LogoScroll />
      </section>
    </>
  );
}

export default ServiceHeader;
