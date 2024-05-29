import RiskIcon from "./RiskIcon";
import PropTypes from "prop-types";
import styles from "./MenuActive.module.css";

const MenuActive = ({ className = "" }) => {
  return (
    <div className={[styles.menuActive, className].join(" ")}>
      <div className={styles.menuActiveChild} />
      <RiskIcon riskIconPosition="relative" />
    </div>
  );
};

MenuActive.propTypes = {
  className: PropTypes.string,
};

export default MenuActive;
