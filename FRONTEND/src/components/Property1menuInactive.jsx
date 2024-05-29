import { useMemo } from "react";
import styles from "./Property1menuInactive.module.css";

const Property1menuInactive = ({
  className = "",
  ordersIcon,
  property1menuInactiveBackgroundColor,
  property1menuInactiveBackground,
  rectangleDivBackgroundColor,
}) => {
  const property1menuInactiveStyle = useMemo(() => {
    return {
      backgroundColor: property1menuInactiveBackgroundColor,
      background: property1menuInactiveBackground,
    };
  }, [property1menuInactiveBackgroundColor, property1menuInactiveBackground]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  return (
    <div
      className={[styles.property1menuInactive, className].join(" ")}
      style={property1menuInactiveStyle}
    >
      <div
        className={styles.property1menuInactiveChild}
        style={rectangleDivStyle}
      />
      <img className={styles.ordersIcon} alt="" src={ordersIcon} />
    </div>
  );
};

Property1menuInactive.propTypes = {
  className: PropTypes.string,
  ordersIcon: PropTypes.string,

  /** Style props */
  property1menuInactiveBackgroundColor: PropTypes.any,
  property1menuInactiveBackground: PropTypes.any,
  rectangleDivBackgroundColor: PropTypes.any,
};

export default Property1menuInactive;
