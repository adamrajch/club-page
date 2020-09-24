import styles from "../../styles/HomePage.module.css";
import useState from "react";
const Practice = ({ event, tbd }) => {
  // const [isPractice, setPractice] = useState(false)
  return (
    //required info: date, location, address, event, who to contact text/email

    <div className={styles.cardcontainer}>
      <div className={styles.title}>NEXT {event}</div>
      <hr className={styles.divider} />
      <div className="flex justify-center">
        <div className={styles.listcontainer}>
          {tbd ? (
            <div className={styles.tbd}>TBD</div>
          ) : (
            <ul className={styles.list}>
              <li>@ "WHERE"</li>
              <li>Date: "WHEN"</li>
              <li>Time: 4pm</li>
              <li>Address: Doo daba</li>

              <li>note stuff here</li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
export default Practice;
