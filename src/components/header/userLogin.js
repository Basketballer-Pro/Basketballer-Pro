import React from 'react';

import Bell from 'assets/icons/bell';
import Gear from 'assets/icons/gear';
import Chevron from 'assets/icons/chevron';
import kobe from 'assets/imgs/kobe.png';

import styles from './userLogin.module.scss';

const UserLogin = () => {
  return (
    <div className={styles.userContainer}>
      <div className={styles.borderTriangle} />
      <button>
        <div className={styles.svgContainer}>
          <Bell />
        </div>
      </button>
      <button>
        <div className={styles.svgContainer}>
          <Gear />
        </div>
      </button>
      <button>
        <img src={kobe} alt="user avatar" className={styles.userPic} />
        <div className={styles.userName}>Kobe Bryant</div>
        <div className={styles.chevronContainer}>
          <Chevron color={'#959595'} /* color is $grey3 */ />
        </div>
      </button>
    </div>
  );
};

export default UserLogin;
