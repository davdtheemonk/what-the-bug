import React from "react"
import {Adsense} from '@ctrl/react-adsense';
import  "./styles.css"



export default function LongAd(){

    return(
       <div className="ad-bar">
      <Adsense
  client="ca-pub-1377163247342129"
  slot="8487722237"
  style={{minWidth:100}}
/>
</div>

    )
}
