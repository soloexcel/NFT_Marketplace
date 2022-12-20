import React from 'react';
import Image from 'next/image';
import { BsCircleFill } from "react-icons/bs";

import Style from './Category.module.css';
import images from '../../img';
const Category = () => {
    const CategoryArray = [
        {
          image: images.creatorbackground2,
          name: "Sports",
        },
        {
          image: images.creatorbackground3,
          name: "Entirtment Art",
        },
        {
          image: images.creatorbackground4,
          name: "Time Life",
        },
        {
            image: images.creatorbackground1,
            name: "Dance Monkey",
        },
        {
          image: images.creatorbackground5,
          name: "Animals Art",
        },
        {
          image: images.creatorbackground6,
          name: "Music",
        },
        {
          image: images.creatorbackground7,
          name: "Digital Arts",
        },
        {
          image: images.creatorbackground8,
          name: "Hubby",
        },
        {
          image: images.creatorbackground9,
          name: "Zubby Arts",
        },
        {
          image: images.creatorbackground10,
          name: "My Fav",
        },
        {
            image: images.creatorbackground8,
            name: "Bad Arts",
        },
      ];
      return (
        <div className={Style.box_category}>
          <div className={Style.category}>    
            {CategoryArray.map((el, i) => (
              <div className={Style.category_box} key={i + 1}>
                <Image
                  src={el.image}
                  className={Style.category_box_img}
                  alt="Background image"
                  width={300}
                  height={200}
                  
                />
    
                <div className={Style.category_box_title}>
                  <span>
                    <BsCircleFill />
                  </span>
                  <div className={Style.category_box_title_info}>
                    <h4>{el.name}</h4>
                    <small>{i + 1}995 NFTS</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
};
export default Category