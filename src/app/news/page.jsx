/* eslint-disable @next/next/no-img-element */
import styles from "./news.module.css";
import NewsAndEvents from "@/components/NewsAndEvents";

function News() {
  return (
    <>
      <section className={styles.news}>
        <div className="container">
          <div className={styles.rowNews}>
            <div className={styles.columnNews}>
              <h2 className="h3">News & Events</h2>
              <p className="description">
                Discover our most recent insights and updates on interior design
                trends.
              </p>
              <div className={styles.innerColumnNews}>
                <img src="/news/Background.png" alt="image" />
                <img src="/news/Link-1.png" alt="image" />
                <img src="/news/Link-2.png" alt="image" />
              </div>
            </div>
            <div className={styles.columnNews}>
              <img src="/news/Link.png" alt="image" />
              <h4 className="h4">
                Ocean Lifespaces Wins Prestigious Contract to Redesign Tech
                Giants Headquarters
              </h4>
              <p className="description">
                Ocean Lifespaces secures a major project to transform the
                interior of a prominent tech companys headquarters, emphasizing
                innovative design and functionality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <NewsAndEvents list={7} />
    </>
  );
}

export default News;
