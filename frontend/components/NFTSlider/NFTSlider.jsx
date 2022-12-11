import React, { useState, useEffect, useCallback} from 'react'
import Image from 'next/image';
import { AiFillFire, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { MdVerified, MdTimer } from 'react-icons/md';
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb'; 

import { Button } from '../componentsIndex';
import Style from './NFTSlider.module.css';
import images from '../../img';

const NFTSlider = () => {
    const [idNumber, setIdNumber] = useState(1);
    // NFTs data
    const sliderData = [
        {
            title: "Hello NFT",
            name: "Solomon Excel",
            collection: "GYM",
            price: "0.0015 ETH",
            like: "2334",
            image: images.user1,
            nftImages: images.nft_image_1,
            id: 1,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            }
        },

        {
            title: "Bob NFT",
            name: "Bobby Bob",
            collection: "GYM",
            price: "0.0000000123 ETH",
            like: "23",
            image: images.user1,
            nftImages: images.nft_image_2,
            id: 2,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            }
        },

        {
            title: "Hello NFT",
            name: "Solomon Excel",
            collection: "GYM",
            price: "0.0015 ETH",
            like: "2334",
            image: images.user1,
            nftImages: images.nft_image_3,
            id: 3,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            }
        },

        {
            title: "Doge NFT",
            name: "Shagi Sigi",
            collection: "Adventure",
            price: "0.0005 ETH",
            like: "542",
            image: images.user4,
            nftImages: images.nft_image_1,
            id: 4,
            time: {
                days: 27,
                hours: 10,
                minutes: 11,
                seconds: 35,
            }
        }
    ];

  return (
    <div className={Style.NFTSlider}>
        <div className={Style.NFTSlider_box}>
            <div className={Style.NFTSlider_box_left}>
                <h2>
                    {sliderData[idNumber].title}
                </h2>
                <div className={Style.NFTSlider_box_left_creator}>
                <div className={Style.NFTSlider_box_left_creator_profile}>
                    <Image className={Style.NFTSlider_box_left_creator_profile_img} src={sliderData[idNumber].image} alt="profile image" width={50} height={50}></Image>

                    <div className={Style.NFTSlider_box_left_creator_profile_img}>
                        <p>Creator</p>
                        <h4>{sliderData[idNumber].name}{" "} <span><MdVerified /></span>
                        </h4>
                    </div>
                </div>

                <div className={Style.NFTSlider_box_left_creator_collection_info}>
                    <p>Collection</p>
                    <h4>{sliderData[idNumber].collection}</h4>
                </div>
                </div>
                <div className={Style.NFTSlider_box_left_bidding}>
                    <div className={Style.NFTSlider_box_left_bidding_box }>
                        <small>Current Bid</small>
                        <p>{sliderData[idNumber].price} <span>$,5, 1000</span></p>
                    </div>

                    <p className={Style.NFTSlider_box_left_bidding_box_auction}>
                        <MdTimer  className={Style.NFTSlider_box_left_bidding_box_icon}/>
                        <span>Auction ending inc</span>
                    </p>

                    <dir className={Style.NFTSlider_box_left_bidding__timer}></dir>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NFTSlider