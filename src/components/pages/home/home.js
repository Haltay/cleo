import { Link } from "react-router-dom";

import styles from "./home.module.css";

import image1 from "../../../assets/home/Testimonial-1.jpg";
import image2 from "../../../assets/home/Testimonial-2.jpg";
import image3 from "../../../assets/home/Testimonial-3.jpg";


const Home = () => {
  return (
    <>
      <h1 className={styles.title}>
        <span style={{ color: "#C11977" }}>W</span>
        <span style={{ color: "#C00C0B" }}>E</span>
        <span style={{ color: "#D76435" }}>L</span>
        <span style={{ color: "#E9D76A" }}>C</span>
        <span style={{ color: "#5FC54E" }}>O</span>
        <span style={{ color: "#53D4F0" }}>M</span>
        <span style={{ color: "#466A8A" }}>E</span>{" "}
        <span style={{ color: "#B827E5" }}>T</span>
        <span style={{ color: "#E9D76A" }}>O</span>{" "}
        <span style={{ color: "#E26690" }}>C</span>
        <span style={{ color: "#C00C0B" }}>L</span>
        <span style={{ color: "#ED7827" }}>E</span>
        <span style={{ color: "#E9D76A" }}>O</span>{" "}
        <span style={{ color: "#5FC54E" }}>C</span>
        <span style={{ color: "#61C2D1" }}>H</span>
        <span style={{ color: "#355881" }}>I</span>
        <span style={{ color: "#B827E5" }}>L</span>
        <span style={{ color: "#E9D76A" }}>D</span>
        <span style={{ color: "#C11977" }}>M</span>
        <span style={{ color: "#C00C0B" }}>I</span>
        <span style={{ color: "#D76435" }}>N</span>
        <span style={{ color: "#E9D76A" }}>D</span>
        <span style={{ color: "#5FC54E" }}>I</span>
        <span style={{ color: "#53D4F0" }}>N</span>
        <span style={{ color: "#466A8A" }}>G</span>
      </h1>
      <section>
        <div className={styles.description}>
          <p>
            Based in Bo’ness, a small town in Central Scotland, Cécile runs a
            childminding service focusing on providing a safe and stimulating
            learning environment indoors, outdoors and beyond in which children
            feel happy, safe and secure.
          </p>
          <p>
            Cécile is a registered childminder with a real passion for child-led
            inquiries, authentic learning opportunities and outdoor experiences.
          </p>
          <p>
            The setting provides children with a warm and stimulating indoor
            environment as well as a beautiful garden. It is close to woodlands,
            fields and beaches offering many opportunities for outdoor play.
          </p>

          <p className={styles.descriptionLink}>
            <Link to="/contact">Contact Us</Link>
          </p>

          <p className={styles.descriptionLink}>
            <Link to="/about"> Find out more about Cleo Chidminding</Link>
          </p>
        </div>
      </section>

      <section>
        <h2 className={styles.titleh2}>Testimonials</h2>
        <div className={styles.homeTestimonial}>
          <div className={styles.homeTestimonialContainer}>
            <p>
              Cecile is a very professional, caring and patient. The environment
              is lovely and each week she has a new settlements for kids. Every
              day is fulfilled with new activities, kids explore nature and are
              en-gaged every day.
              <br />
              She also listens to parents and tries to follow kids routine as
              much as possible.
              <br />
              My youngest boy spends 3 days with Cecile and he got used to her
              very quickly. My older boy spends 1 afternoon a week with her and
              is always excited to go there.
              <br />
              I leave my kids without any worry and I just can't recommend
              Cecile enough.
              <br />I am very glad I have found her and I know we will continue
              to use her help through the coming years.
            </p>
            <div className={styles.testimonialImage}>
              <img src={image1} alt="cleochildminding-testimonial" />
            </div>
          </div>

          <div className={styles.homeTestimonialContainer}>
            <p>
              My 3 daughters have been attending Cleo Childminding and
              absolutely love it there.
              <br />
              My youngest has attended since she was 10 months old and has
              thrived in Cecile's care. Cecile took the time to settle her in
              and the 2 of them have such a lovely bond, its so nice to see her
              happy to be dropped off each day. My older girls attend for
              breakfast before school and they are always excited to show me
              what they have done there, despite the short time they have
              available. <br />
              Cecile also goes above and beyond by providing our choice of a
              healthy, balanced plant based diet for our children.
              <br /> I highly recommend Cecile and Cleo Childminding.
            </p>
            <div className={styles.testimonialImage}>
              <img src={image2} alt="cleochildminding-testimonial" />
            </div>
          </div>

          <div className={styles.homeTestimonialContainer}>
            <p>
              My Daughter attends Cleo Childminding and absolutely loves it. So
              much so that she often doesn’t want to leave such is her
              enjoyment!
              <br />
              She has come on so much and we love seeing the progress our
              daughter is making through the wonderful pictures that she shares
              with us. Cecile even keeps a book that lovingly details our
              daughters progress and is a joy to look over filled with images
              and arts and crafts from their time together.
              <br />
              We highly recommend Cecile and are grateful to have found her, she
              genuinely cares and is wonderful at her job.
              <br /> Thank you! 😊
            </p>
            <div className={styles.testimonialImage}>
              <img src={image3} alt="cleochildminding-testimonial" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
