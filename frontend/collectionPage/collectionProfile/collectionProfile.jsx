import React from 'react'
import Image from 'next/image'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram, TiSocialYoutube, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'

import Style from './CollectionProfile.module.css'
import images from '../../img'

const CollectionProfile = () => {

  const cardArray = [1,2,3,4];
  return (
    <div className={Style.collectionProfile}>
        <div className={Style.collectionProfile_box}>
            <div className={Style.collectionProfile_box_left}>
                <Image src={images.nft_image_1} alt='nft image'
                width={300} height={300} 
                className = {Style.collectionProfile_box_left_img}/>

                <div className={Style.collectionProfile_box_left_social}>   <a href="#">
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

            <div className={Style.collectionProfile_box_middle}>
                <h1>NFTs Collection</h1>
                <p>Grandida is home to 100k+ generative traditional artifacts. Preserving the memories of our time past. </p>

                <div className={Style.collectionProfile_box_middle_box}>
                    {cardArray.map((el, i) => (
                    <div className={Style.collectionProfile_box_middle_box_item} key={i + 1}>

                        <small>Price</small>
                        <p>${i + 1}10,000</p>
                        <span>+ {i + 2}.11%</span>
                    </div>
                    )) } 
                </div>
            </div>
        </div>
    </div>
  )
}

export default CollectionProfile