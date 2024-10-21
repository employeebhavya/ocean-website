/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "./ServicesGrid.module.css";
import Button from "../components/Button";

const ServicesItems = [
  {
    image: "/services/Link.png",
    title: "Interior Design",
    description: `Explore personalized design concepts with our experts for a tailored, stylish, and functional living space transformation.`,
    link: "/services/interior-design",
  },
  {
    image: "/services/Link-1.png",
    title: "Civil Construction",
    description: `Professional assembly service ensures flawless setup, saving you time and effort. Enjoy your furniture hassle-free.`,
    link: "/services/civil-construction",
  },
  {
    image: "/services/Link-2.png",
    title: "Design & Build",
    description: `Illuminate your space with our expert Lighting Design service. Elevate ambiance and aesthetics effortlessly. Shine bright!`,
    link: "/services/design-and-build",
  },
  {
    image: "/services/Link-3.png",
    title: "Fit Outs",
    description: `Professional assembly ensures furniture is expertly put together, saving you time and hassle. Quality guaranteed.`,
    link: "/services/fit-outs",
  },
  {
    image: "/services/Link-4.png",
    title: "Marine Infrastructure",
    description: `Elevate your space with our expert home staging services, creating a stylish and inviting atmosphere effortlessly.`,
    link: "/services/marine-infrastructure",
  },
];

function ServicesGrid() {
  return (
    <section className={styles.servicesGrid}>
      <div className="container">
        <div className={styles.rowMainServicesGrid}>
          <div className={styles.rowServicesGrid}>
            {ServicesItems.map((item) => (
              <div key={item.title} className={styles.columnServicesGrid}>
                <img src={item.image} alt="image" />
                <div className={styles.contentBoxSg}>
                  <h3 className="h4">{item.title}</h3>
                  <p className="description">{item.description}</p>
                  <Link href={item.link}>
                    <Button
                      text="Learn More"
                      textColor="var(--color-dark-blue)"
                      bgColor="transparent"
                      borderColor="var(--color-dark-blue)"
                      hoverBgColor="var(--color-dark-blue)"
                      hoverTextColor="#ffffff"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;
