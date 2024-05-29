import styles from "./FilterSection.module.css";

const FilterSection = ({ className = "" }) => {
  return (
    <div className={[styles.filterSection, className].join(" ")}>
      <div className={styles.divider}>
        <div className={styles.divider1} />
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.magnifyingGlass1Parent}>
            <img
              className={styles.magnifyingGlass1Icon}
              alt=""
              src="/magnifyingglass-11.svg"
            />
            <div className={styles.searchForSomething}>
              Search for something
            </div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <img className={styles.frameChild} alt="" src="/group-346.svg" />
              <div className={styles.moreFilter}>More Filter</div>
            </div>
          </div>
        </div>
        <div className={styles.groupWrapper}>
          <div className={styles.groupDiv}>
            <div className={styles.groupParent}>
              <img
                className={styles.magnifyingGlass1Icon}
                alt=""
                src="/downloadicon.svg"
              />
              <div className={styles.moreFilter}>Download</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.divider1} />
      </div>
    </div>
  );
};

FilterSection.propTypes = {
  className: PropTypes.string,
};

export default FilterSection;
