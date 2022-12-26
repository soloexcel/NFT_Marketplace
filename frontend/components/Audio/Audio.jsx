import React from 'react'

import Style from './Audio.module.css';
import BigAudioCard from './BigAudioCard/BigAudioCard';
import SmallAudioCard from './SmallAudioCard/SmallAudioCard';

const Audio = () => {
  return (
    <div className={Style.audio}>
      <div className={Style.audio_box}>
        <div className={Style.audio_box_left}>
          <BigAudioCard />
          <BigAudioCard />
        </div>
        <div className={Style.audio_box_right}>
          <SmallAudioCard />
          <SmallAudioCard />
          <SmallAudioCard />
        </div>
      </div>
    </div>
  )
}

export default Audio