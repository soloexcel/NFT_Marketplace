import React from 'react';
import Image from 'next/image';

// Internal import
import images from '../../../img';
import Style from './Notification.module.css';

const Notification = () => {

  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="profile image" width={50} height={50}
          className={Style.notification_box_img} />
        </div>
        <div className={Style.notification_box_info}>
          <h4>Solomon Excel</h4>
          <p>NFT Storefront Developer</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification