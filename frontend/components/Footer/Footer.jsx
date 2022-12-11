import React from 'react';
import Image from 'next/image';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { RiSendPlaneFill } from 'react-icons/ri';


// import internal style 
import Style from './Footer.module.css';
import images from '../../img';
import { Discover, HelpCenter } from '../NavBar/index';



const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
      <div className={Style.subscribe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type="email" placeholder='Provide your email *' />
            <RiSendPlaneFill className={Style.subscribe_box_send} />
          </div>

          <div className={Style.subscribe_box_info}>
            <p>
              DisCover, Collect and sell extraordinary NFTs OpenSea is the first and largest NFT marketplace
            </p>
          </div>
        </div>
        
        <div className={Style.footer_box_discover}> <h3>Discover</h3>
          <Discover />
        </div>

        <div className={Style.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>
        
        <div className={Style.footer_box_social}>
          <Image src={images.logo} alt="footer logo" width={100} height={100}></Image>
          <p>
            The World's first and largest digital Maerket place
          </p>
          <div className={Style.footer_social}>
          <a href="#">
            <TiSocialLinkedin/>
          </a>
          <a href="#">
            <TiSocialTwitter/>
          </a>
          <a href="#">
            <TiSocialFacebook/>
          </a>
          <a href="#">
            <TiSocialInstagram/>
          </a>
          <a href="#">
            <TiSocialYoutube/>
          </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Footer