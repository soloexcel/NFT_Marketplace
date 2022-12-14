import React from 'react';
import Image from 'next/image';


import images from '../../img';
import Style from './Services.module.css';
const Services = () => {
  return (
    <div className={Style.services}>
      <div className={Style.services_box}>
        
        <div className={Style.services_box_item}>
          <p className={Style.services_box_item_step}>
              <span>1</span>
          </p>
          <Image className = {Style.img} src={images.home} alt="Filter" width={50} height={50}
          />
          <div className={Style.services_content_box}>
          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>
          </div>
        </div>
          

        <div className={Style.services_box_item}>
          <p className={Style.services_box_item_step}>
              <span>2</span>
          </p>
          <Image className = {Style.img} src={images.wallet} alt="Filter" width={50} height={50}
          />
          <div className={Style.services_content_box}>
          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>
          </div>
        </div>

        <div className={Style.services_box_item}>
          <p className={Style.services_box_item_step}>
              <span>3</span>
          </p>
          <Image className = {Style.img} src={images.order} alt="Filter" width={50} height={50}
          />
          <div className={Style.services_content_box}>
          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>
          </div>
        </div>

        <div className={Style.services_box_item}>
          <p className={Style.services_box_item_step}>
              <span>4</span>
          </p>
          <Image className = {Style.img} src={images.cash} alt="Filter" width={50} height={50}
          />
          <div className={Style.services_content_box}>
          <h3>Filter and Discover</h3>
          <p>Connect with wallet, discover, buy NFTs, Sell your NFTs for cool money.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Services