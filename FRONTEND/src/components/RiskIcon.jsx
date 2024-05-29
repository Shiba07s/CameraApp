import { useMemo } from "react";
import styles from "./RiskIcon.module.css";

const RiskIcon = ({ className = "", riskIconPosition }) => {
  const riskIconStyle = useMemo(() => {
    return {
      position: riskIconPosition,
    };
  }, [riskIconPosition]);

  return (
    <div
      className={[styles.riskIcon, className].join(" ")}
      style={riskIconStyle}
    >
      <div className={styles.group}>
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        <img
          className={styles.clipPathGroup}
          alt=""
          src="/clip-path-group.svg"
        />
      </div>
    </div>
  );
};

RiskIcon.propTypes = {
  className: PropTypes.string,

  /** Style props */
  riskIconPosition: PropTypes.any,
};

export default RiskIcon;
