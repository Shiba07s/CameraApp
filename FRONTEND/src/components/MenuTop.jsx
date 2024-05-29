import Property1menuInactive from "./Property1menuInactive";
import MenuActive from "./MenuActive";
import PropTypes from "prop-types";
import styles from "./MenuTop.module.css";

const MenuTop = ({ className = "" }) => {
  return (
    <div className={[styles.menuTop, className].join(" ")}>
      <Property1menuInactive
        ordersIcon="/dashboardicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/ordersicon.svg"
        property1menuInactiveBackgroundColor="unset"
        property1menuInactiveBackground="linear-gradient(-90deg, rgba(255, 255, 255, 0.2), rgba(116, 105, 182, 0.2))"
        rectangleDivBackgroundColor="#7469b6"
      />
      <Property1menuInactive
        ordersIcon="/assignmenticon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/planicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/materialicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/inventoryicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/materialmovementicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/workstationicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/processviolationicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/rejectionicon@2x.png"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <Property1menuInactive
        ordersIcon="/issuesicon.svg"
        property1menuInactiveBackgroundColor="rgba(255, 255, 255, 0.2)"
        property1menuInactiveBackground="unset"
        rectangleDivBackgroundColor="unset"
      />
      <MenuActive />
    </div>
  );
};

MenuTop.propTypes = {
  className: PropTypes.string,
};

export default MenuTop;
