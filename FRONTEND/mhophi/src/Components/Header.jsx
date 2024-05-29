// Import React and PropTypes if you're using them
import React from 'react';
import PropTypes from 'prop-types';

// Assuming styles is imported from a CSS module
import styles from './Header.module.css';

const Header = ({ className = '' }) => {
  return (
    <div className={[styles.header, className].join(' ')}>
      <div className={styles.headerChild} />
      <img className={styles.maskGroupIcon} alt="" src="/mask-group@2x.png" />
      <img className={styles.headerItem} alt="" src="/group-4.svg" />
      <img className={styles.headerInner} alt="" src="/group-3.svg" />
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img
          className={styles.magnifyingGlass1Icon}
          alt=""
          src="/magnifyingglass-1.svg"
        />
        <div className={styles.searchForSomething}>Search for something</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.dashboardParent}>
          <div className={styles.dashboard}>Dashboard</div>
          <img className={styles.frameIcon} alt="" src="/frame.svg" />
        </div>
        <div className={styles.ordersProductDetails}>
          Order’s Product Details
        </div>
      </div>
    </div>
  );
};

// Define PropTypes for the component
Header.propTypes = {
  className: PropTypes.string,
};

// Export the component
export default Header;
