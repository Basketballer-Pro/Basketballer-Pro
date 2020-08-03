import React from 'react';

import Bell from 'assets/icons/bell';
import Gear from 'assets/icons/gear';
import Chevron from 'assets/icons/chevron';
import kobe from 'assets/imgs/kobe.png';

import styles from './userLogin.module.scss';

const UserLogin = () => {
  return (
    <div className={styles.userContainer}>
      <button>
        <Bell />
      </button>
      <button>
        <Gear />
      </button>
      <button>
        <img
          src={kobe}
          alt="user avatar"
          height="25"
          className={styles.userPic}
        />
        <div className={styles.userName}>Kobe Bryant</div>
        <Chevron
          width={14}
          height={7}
          color={'#959595'} /* color is $grey3 */
        />
      </button>
    </div>
  );
};

export default UserLogin;
