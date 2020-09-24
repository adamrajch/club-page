import styles from "../../styles/HomePage.module.css";
import Card from "./Practice";

const Banner = () => {
  return (
    //required info: date, location, address, event, who to contact text/email
    <div className={styles.bannercontainer}>
      <Card event="practice" tbd={false} />
      <Card event="tournament" tbd={true} />
    </div>
  );
};
export default Banner;
