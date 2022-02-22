import { Link } from "react-router-dom";

import imageCleo from "../../../assets/about/cleo.jpg";

import styles from "./about.module.css";

const About = () => {
  return (
    <>
      <section className={styles.about}>
        <h1>About</h1>
        <div className={styles.about__image}>
          <img src={imageCleo} alt="cleochildminding-Cleo" />
        </div>

        <div className={styles.aboutContent}>
          <p>
            I have always been working with children. I started as a primary
            school teacher in France and then became a home-educator. When I
            moved to Scotland with my family, I started teaching French to
            children from 4 to 12 years old and in 2019 I opened Cleo
            Childminding.
          </p>
          <p>
            I hope to share my enthusiasm for authentic learning, the wonders of
            nature and the challenges outdoors experiences can offer.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <h3>Registration</h3>
          <p>
            Cécile is registered with the Care Inspectorate to care for a
            maximum of 6 children under 16 at any one time, of whom no more than
            three are not yet attending primary school, and no more than one is
            under 1. These numbers include her own children.
          </p>
        </div>

        <div className={styles.aboutContent}>
          <h3>Inspection Results</h3>
          <p>
            I had a Care Inspectorate inspection in September 2021. The
            inspector looked at the following quality statement indicators and
            gave the following grades:
          </p>
          <ul>
            <li>Quality of care and support: 5 - Very Good</li>
            <li>Quality of environment: 5 - Very Good</li>
            <li>Quality of management and leadership: 5 - Very Good</li>
          </ul>
          <p>
            The full report can be viewed here: {" "}
            <a
              href="https://www.careinspectorate.com/index.php/care-services?detail=CS2019373681&q=cleo&fq=!(ServiceStatus:$Cancelled$)&sort=&startr=0&message=%3Cb%3EResults%20for%20cleo:%3C/b%3E%20&sCondition=null"
              target="careinspectorate"
            >
               Care Inspectorate report
            </a>
          </p>
        </div>

        <div className={styles.aboutContent}>
          <h3>Aims and Objectives</h3>
          <p>
            My aims as a childminder are to provide children with a loving
            environment to play in and opportunities to grow and to build on the
            children’s natural curiosity. In my parenting and as a childminder I
            use a gentle approach. I have a real passion for child-led
            inquiries, authentic learning opportunities and outdoor experiences.
          </p>
          <p>
            I am passionate about my role as a childminder and will work hard to
            provide your child with the best possible care service that I can.
          </p>
          <p>I will strive to:</p>
          <ul>
            <li>
              Provide a safe and stimulating learning environment indoors,
              outdoors and beyond in which children feel happy, safe and secure.
            </li>
            <li>Listen to your child, their interests and feelings.</li>
            <li>
              Provide a wide variety of activities taking your child’s interests
              and developmental stages into account.
            </li>
            <li>
              Provide opportunities to experience and connect with nature.
              (provide frequent outdoor play opportunities.)
            </li>
            <li>
              Be a positive role model and promote social skills, encouraging
              courteous behaviour and respect for others.{" "}
            </li>
            <li>
              Develop moral values that promote consideration for individual and
              cultural differences.
            </li>
            <li>
              Offer an environment in which English and French are both part of
              and in which all cultures and languages are welcome and
              celebrated.
            </li>
            <li>
              Provide a healthy diet and encourage your child to learn about
              their own health and well-being.
            </li>
          </ul>
          <p className={styles.descriptionLink}>
            <Link to="/contact">
              Please contact us if you have any questions.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
