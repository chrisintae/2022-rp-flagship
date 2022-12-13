import Layout from "../components/Layout";
import BasicMeta from "../components/meta/BasicMeta";
import OpenGraphMeta from "../components/meta/OpenGraphMeta";
import TwitterCardMeta from "../components/meta/TwitterCardMeta";

import styles from "../components/sass/home.module.sass";

export default function Index() {
  return (
    <Layout>
      <BasicMeta url={"/"} />
      <OpenGraphMeta url={"/"} />
      <TwitterCardMeta url={"/"} />
      <div className={styles.wrapper}>
        <div className={`${styles.col} ${styles["info-col"]}`}>
          <div className={styles.container}>
            <div className={styles["heading-container"]}>
              <div className={styles["image-container"]}></div>

              <img />
              <h1 className={styles.title}>
                Community Leadership | Product/Project Management
              </h1>
              <h1 className={styles.name}>Rachel Park</h1>
              <h3>Somerville</h3>
            </div>

            <div className={styles["desc-container"]}>
              <p>
                I'm mission-driven with a passion for building inclusive
                environments for all to thrive. Energized by rallying teams
                around a common goal, I'll bring a collaborative, empathetic
                approach to your company or project.
              </p>

              <p>
                My experience across a variety of industies – tech, e-commerce,
                healthcare, higher education, and nonprofits – has fueled my
                ability to foster cross-functional partnerships and create fully
                integrated products and/or experiences.
              </p>
            </div>

            <div className={styles["skills-container"]}>
              <ul>
                <li>Community Leadership &amp; Outreach</li>
                <li>Product &amp; Project Management</li>
                <li>Program Development &amp; Process Improvement</li>
                <li>Agile/Scrum/Kanban with Distributed Teams</li>
                <li>Web &amp; Digital Marketing</li>
                <li>Content Creation &amp; Management</li>
              </ul>
            </div>

            <div className={styles["experience-container"]}>
              <ul>
                <li>
                  <strong>General Assembly</strong> | Remote
                </li>
                <li>
                  <strong>Modern Tribe</strong> | Remote
                </li>
                <li>
                  <strong>Asian Women for Health</strong> | Boston, MA
                </li>
                <li>
                  <strong>Wayfair</strong> | Boston, MA
                </li>
                <li>
                  <strong>athenahealth</strong> | Watertown, MA
                </li>
                <li>
                  <strong>Brandeis University</strong> | Waltham, MA
                </li>
                <li>
                  <strong>The Center for Arts at the Armory</strong> |
                  Somerville, MA
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`${styles.col} ${styles["img-col"]}`}></div>
      </div>
    </Layout>
  );
}
