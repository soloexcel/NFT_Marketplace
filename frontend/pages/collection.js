import React from 'react'

import Style from '../styles/collection.module.css'
import { Banner, CollectionProfile, NFTCardTwo } from '../collectionPage/collectionIndex'
import { Slider, Brand } from '../components/componentsIndex'
import Filter  from "../components/Filter/Filter"
import images from '../img'

const collection = () => {
  const collectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ]
  return (
    <div className={Style.collection}>
      <Banner bannerImg = {images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData = {collectionArray}/>
      <Slider />
      <Brand />
    </div>
  )
}

export default collection