import styles from "./info.module.css";

const Info = () => {
  return (
    <section className={styles.info}>
      <h1>
        Cleo Chilminding Information
        
      </h1>
      <p>
        The service is currently full at the moment and I have a waiting list
        for children ready to start in August 2022. I am happy to chat, so
        please get in touch if you have any questions about adding your name to
        the waiting list.
      </p>

      <div className={styles.infoContent}>
        <h3>Opening Times</h3>
        <p>
          Cleo Childminding is open 4 days a week, Monday to Thursday from
          9.00am to 5pm
        </p>
        <p>
          PLEASE NOTE: there is a two-session per week minimum attendance
          requirement. This can be any two sessions (subject to availability).
        </p>
      </div>

      <div className={styles.infoContent}>
        <h3>Funded Places</h3>
        <p>
          Cleo Childminding works in partnership with Falkirk Council to provide
          funded places for children aged 3 and 4, plus eligible 2s.
        </p>
      </div>

      <div className={styles.infoContent}>
        <h3>Thinking of joining the setting?</h3>
        <p>
          Get in touch and I can answer any questions you have, let you know
          availability for your child’s age group. (contact page link)
        </p>
        <p>
          The best way to find out if Cleo childminding is the right place for
          you is by seeing it for yourself. Please speak to me about organising
          a visit.
        </p>
        <p>
          PLEASE NOTE: Due to new protocols surrounding Covid-19, visits may not
          be possible in the way described above. I will however ensure you and
          your child have opportunities to see the environment and meet me prior
          to starting.
        </p>
      </div>
    </section>
  );
};

export default Info;
