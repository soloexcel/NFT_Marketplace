import React from 'react'
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";
import Image from 'next/image'

import Style from './Brand.module.css'
import { Button } from '../../components/componentsIndex'
import images from '../../img'

const Brand = () => {
    const router = useRouter();
    return (
      <div className={Style.Brand}>
        <div className={Style.Brand_box}>
          <div className={Style.Brand_box_left}>
            
            {/* <a href="/">
              <DiJqueryLogo className={Style.Brand_box_left_logo} />
            </a> */}
            <h1>Earn free crypto with Prowess</h1>
            <p>A creative agency that lead and inspire.</p>
  
            <div className={Style.Brand_box_left_btn}>
              <Button
                btnName="Create"
                handleClick={() => router.push("/uploadNFT")}
              />
              <Button
                btnName="Discover"
                handleClick={() => router.push("/searchPage")}
              />
            </div>
          </div>
          <div className={Style.Brand_box_right}>
            <Image src={images.earn} alt="brand logo" width={500} height={400} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Brand;
  