/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./contact.module.css";
import ContactForm from "../../components/ContactForm";
import FAQ from "../../components/FAQ";

function Contact() {
  return (
    <>
      <section className={styles.contact}>
        <div className="container">
          <div className={styles.rowMainContact}>
            <div className={styles.rowContact}>
              <div className={styles.columnContact}>
                <img src="/contact/map.png" alt="image" />
                <div className={styles.content}>
                  <h5 className="h5">Address</h5>
                  <p className="description">
                    Ocean Lifespaces India Pvt LtdMF-1, Industrial Estate,CIPET
                    Hostel Road, Guindy,Chennai - 600 032, Tamil Nadu, India.
                  </p>
                </div>
              </div>
              <div className={styles.columnContact}>
                <img src="/contact/mail.png" alt="image" />
                <div className={styles.content}>
                  <h5 className="h5">Email</h5>
                  <p className="description">info@ocean.net.in</p>
                </div>
              </div>
              <div className={styles.columnContact}>
                <img src="/contact/map.png" alt="image" />
                <div className={styles.content}>
                  <h5 className="h5">Call</h5>
                  <p className="description">
                    Call Us: +91-98410 22110<br></br>Tel: +91-44-6919 9900
                  </p>
                </div>
              </div>
              <div className={styles.columnContact}>
                <img src="/contact/map.png" alt="image" />
                <div className={styles.content}>
                  <h5 className="h5">Links</h5>
                  <p className="description">
                    <Link href="#">Instagram</Link>
                    <br></br>
                    <Link href="#">Facebook</Link>
                    <br></br>
                    <Link href="#">LinkedIn</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.contactForm}>
        <div className="container">
          <ContactForm />
        </div>
      </section>
      <section className={styles.faqSection}>
        <div className="container">
          <FAQ />
        </div>
      </section>
    </>
  );
}

export default Contact;
