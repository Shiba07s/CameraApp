import styles from "./MenuTop.module.css";

const MenuTop = ({ className = "" }) => {
  return (
    <div className={[styles.menuTop, className].join(" ")}>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img className={styles.dashboardIcon} alt="" src="/dashboardicon.svg" />
      </div>
      <div className={styles.menuActive1}>
        <div className={styles.menuActiveItem} />
        <img className={styles.dashboardIcon} alt="" src="/ordersicon.svg" />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/assignmenticon.svg"
        />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img className={styles.dashboardIcon} alt="" src="/planicon.svg" />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img className={styles.dashboardIcon} alt="" src="/materialicon.svg" />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img className={styles.dashboardIcon} alt="" src="/inventoryicon.svg" />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/materialmovementicon.svg"
        />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/workstationicon.svg"
        />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img
          className={styles.dashboardIcon}
          alt=""
          src="/processviolationicon.svg"
        />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img
          className={styles.rejectionIcon}
          alt=""
          src="/rejectionicon@2x.png"
        />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <img className={styles.dashboardIcon} alt="" src="/issuesicon.svg" />
      </div>
      <div className={styles.menuActive}>
        <div className={styles.menuActiveChild} />
        <div className={styles.dashboardIcon}>
          <div className={styles.group}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img
              className={styles.clipPathGroup}
              alt=""
              src="/clip-path-group.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// MenuTop.propTypes = {
//   className: PropTypes.string,
// };

export default MenuTop;
