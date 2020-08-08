import React from 'react';

import Bell from 'assets/icons/bell';
import Gear from 'assets/icons/gear';
import Chevron from 'assets/icons/chevron';
import Hamburger from 'assets/icons/hamburger';
import MagnifyingGlass from 'assets/icons/magnifyingGlass';
import kobe from 'assets/imgs/kobe.png';

import styles from './userLogin.module.scss';

const UserLogin = () => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.filterButton}>
        <button /*className={styles.mobileDontDisPlay} */>
          <Hamburger className={styles.hamburger} />
        </button>
        <button /*className={styles.mobileDontDisplay}*/>
          <MagnifyingGlass className={styles.magnifyingGlass} />
        </button>
      </div>
      <div className={styles.borderTriangle} />
      <button className={styles.mobileDontDisplay}>
        <Bell className={styles.bell} />
      </button>
      <button className={styles.mobileDontDisplay}>
        <Gear className={styles.gear} />
      </button>
      <button className={styles.mobile}>
        <img
          src={kobe}
          alt="user avatar"
          height="25"
          className={styles.userPic}
        />
        <div className={styles.userName}>Kobe Bryant</div>
        <Chevron
          className={styles.chevron}
          width={14}
          height={7}
          color={'#959595'} /* color is $grey3 */
        />
      </button>
    </div>
  );
};

export default UserLogin;
