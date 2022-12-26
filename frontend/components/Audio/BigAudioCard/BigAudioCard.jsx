import React, { useState, useEffect } from "react";
import Image from "next/image";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { TbPlayerPlay, TbPlayerPause } from "react-icons/tb";

//INTERNAL IMPORT
import Style from "./BigAudioCard.module.css";
import images from "../../../img";
// import LikeProfile from "../../LikeProfile/LikeProfile";

const BigAudioCard = () => {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);

  const likeNft = () => {
    if (!like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const playMusic = () => {
    if (!play) {
      setPlay(true);
    } else {
      setPlay(false);
    }
  };
  return (
    <div className={Style.bigAudioCard}>
      <div className={Style.bigAudioCard_box}>
        <div className={Style.bigAudioCard_box_like_time}>
          <div className={Style.bigAudioCard_box_like} onClick={() => likeNft()}>
            {like ? (
              <AiFillHeart className={Style.bigAudioCard_box_like_icon} />
            ) : (
              <AiOutlineHeart
                className={Style.bigAudioCard_box_like_icon_unlike}
              />
            )}

            <span>12</span>
          </div>

          <div className={Style.bigAudioCard_box_time}>
            <div className={Style.bigAudioCard_box_like_time_remaining}>
              <small>Remaining time</small>
              <h5>3h : 15m :20s</h5>
            </div>
          </div>
        </div>

        <div className={Style.bigAudioCard_box_player}>
          <Image src={images.musiceWave} alt="music" width={160} />
          <div
            className={Style.bigAudioCard_box_musicPlayer}
            onClick={() => playMusic()}
          >
            {play ? (
              <div className={Style.bigAudioCard_box_musicPlayer_icon}>
                <TbPlayerPause />
              </div>
            ) : (
              <div className={Style.bigAudioCard_box_musicPlayer_icon}>
                <TbPlayerPlay />
              </div>
            )}
          </div>
        </div>

        <div className={Style.bigAudioCard_box_details}>
          <div className={Style.bigAudioCard_box_details_info}>
            <h4>NFT music #324</h4>
            <div className={Style.bigAudioCard_box_details_info_price}>
              <small>Price</small>
              <p>$3,21.33</p>
            </div>
          </div>

          <div className={Style.bigAudioCard_box_details_stock}>
            {/* <LikeProfile /> */}
            <small>200 in stock</small>
          </div>
        </div>

        <div className={Style.bigAudioCard_box_img}>
          <Image
            src={images.creatorbackground10}
            alt="background"
            width={350}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default BigAudioCard;
