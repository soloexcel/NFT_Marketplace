import React from 'react'
import Image from 'next/image'

import Style from './Banner.module.css'
const Banner = ({ bannerImg }) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image src={bannerImg} alt ="background"
        object-fit='cover' width={1350} height={200}
        />
      </div>

      <div className={Style.banner_img_mobile}>
      <Image src={bannerImg} alt ="background"
        object-fit='cover' width={1024} height={900}
        />
      </div>
    </div>
  )
}

export default Banner