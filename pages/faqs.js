import Accordion from "../components/FAQAccordion/Accordion";
import styles from "../styles/Faqs.module.css";
const Faqs = () => {
  return (
    <div className={styles.container}>
      FAQs
      <Accordion />
    </div>
  );
};

export default Faqs;
