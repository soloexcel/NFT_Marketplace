import React from 'react';
import Image from 'next/image';

import Style from '../HeroSection/HeroSection.module.css';
import images from '../../img';
import {Button} from '../componentsIndex';

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>

        <div className={Style.heroSection_box}>
            <div className={Style.heroContent}>
            <h1>
                    Discover, <span className={Style.underlined + ' ' + Style.underlineClip}>Sell</span><br />& Collect <span className={Style.underlined + ' ' + Style.underlineMask}>Rare</span><br /><span className={Style.underlined  + ' ' + Style.underlineOverflow}>NFTs</span>
            </h1>

                <p>
                    Discover the most outsanding NFTs from the comfort of your home. Explore your choices.
                </p>
                <Button btnName='Explore' handleClick={()=> {}}/>
            </div>

            {/* <div>
            <Image src={images.hero} width={600} height={600}></Image>

            </div> */}

            {/* <div className={Style.heroSection_box_left}>
                
                <h1>
                        Discover, <span className={Style.underlined + ' ' + Style.underlineClip}>Sell</span><br />& Collect <span className={Style.underlined + ' ' + Style.underlineMask}>Rare</span><br /><span className={Style.underlined  + ' ' + Style.underlineOverflow}>NFTs</span>
                </h1>

                <p>
                    Discover the most outsanding NFTs from the comfort of your home. Explore your choices.
                </p>
                <Button btnName='Explore' handleClick={()=> {}}/>
            </div>

            <div className={Style.heroSection_box_right}>
                <Image src={images.hero} width={600} height={600}></Image>
            </div> */}


        </div>
    </div>
    
  )
};

export default HeroSection