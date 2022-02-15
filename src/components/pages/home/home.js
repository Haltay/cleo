import { Link } from "react-router-dom";

import styles from "./home.module.css";

import image1 from "../../../assets/home/54356091_268044324126929_7880109349899599872_n.jpg";
import image2 from "../../../assets/home/54518998_376326252952952_7854661187634462720_n.jpg";

const Home = () => {
  return (
    <>
      <h1 className={styles.title}>WELCOME TO CLEO CHILDMINDING</h1>
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
              <img src={image2} alt="cleochildminding-testimonial" />
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
              <img src={image1} alt="cleochildminding-testimonial" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
