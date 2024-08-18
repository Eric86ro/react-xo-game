import styles from "./board-metric.module.css";
import Text from "../../common/text/text";
import Heading from "../../common/heading/heading";

const BoardMetric = (props) => {
  return (
    <div
      className={styles["container"]}
      style={{ background: props.background }}
    >
      <Text color="var(--text-color-2)">{props.text}</Text>
      <Heading color="var(--text-color-2)" size="md">
        {props.heading}
      </Heading>
    </div>
  );
};

export default BoardMetric;
