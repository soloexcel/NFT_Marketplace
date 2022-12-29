import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import { RiAwardLine } from "react-icons/ri";
import {TiTick} from 'react-icons/ti';
import { MdVerified } from 'react-icons/md';
import Style from './FollowerCard.module.css';
import images from '../../../img';


const FollowerCard = ({ el, i }) => {
    const [following, setFollowing] = useState(false);
  
    const followMe = () => {
      if (!following) {
        setFollowing(true);
      } else {
        setFollowing(false);
      }
    };
    return (
      <div className={Style.FollowerCard}>
        <div className={Style.FollowerCard_rank}>
          <p>
            #{i + 1} <span><RiAwardLine /></span>
          </p>
        </div>
  
        <div className={Style.FollowerCard_box}>
          <div className={Style.FollowerCard_box_img}>
            <Image
              className={Style.FollowerCard_box_img_img}
              src={el.background || images[`creatorbackground${i + 1}`]}
              alt="profile braground"
              width={200}
              height={200}
              object-fit="cover"
            />
          </div>
  
          <div className={Style.FollowerCard_box_profile}>
            <Image
              className={Style.FollowerCard_box_profile_img}
              alt="profile picture"
              width={50}
              height={50}
              src={el.user}
              // src={el.user || images[`user${i + 1}`]}
            />
          </div>
  
          <div className={Style.FollowerCard_box_info}>
            <div className={Style.FollowerCard_box_info_name}>
              <h4>
                {/* {el.seller.slice(0, 9)} */}
                Solomon Granding{""}{" "}
                <span>
                  <MdVerified />
                </span>
              </h4>
              <p>{el.total || 0} ETH</p>
            </div>
  
            <div className={Style.FollowerCard_box_info_following}>
              {following ? (
                <a onClick={() => followMe()}>
                  Follow{""}{" "}
                  <span>
                    <TiTick />
                  </span>
                </a>
              ) : (
                <a onClick={() => followMe()}>Following</a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FollowerCard;