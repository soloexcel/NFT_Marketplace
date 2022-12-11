import React from 'react';
import Image from 'next/image';


import images from '../../img';
import Style from './Services.module.css';
const Services = () => {
  return (
    <div className={Style.services}>
      <div className={Style.services_box}>
        <div className={Style.services_box_item}>
          <Image src={images.service1} alt="Filter" width={100} height={100}
          ></Image>

          <p className={Style.services_box_item_step}>
            <span>Step 1</span>
          </p>

          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>

        </div>

        <div className={Style.services_box_item}>
          <Image src={images.service2} alt="Filter" width={100} height={100}
          ></Image>

          <p className={Style.services_box_item_step}>
            <span>Step 2</span>
          </p>

          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>

        </div>

        <div className={Style.services_box_item}>
          <Image src={images.service3} alt="Filter" width={100} height={100}
          ></Image>

          <p className={Style.services_box_item_step}>
            <span>Step 3</span>
          </p>

          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>
        </div>

        <div className={Style.services_box_item}>
          <Image src={images.service4} alt="Filter" width={100} height={100}
          ></Image>

          <p className={Style.services_box_item_step}>
            <span>Step 4</span>
          </p>

          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>

        </div>
      </div>
    </div>
  )
}

export default Services