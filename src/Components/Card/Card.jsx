import React from 'react'
import styles from "./Card.module.css"
import calender from "../../ezassets/calender.png"
import ezlogo from "../../ezassets/ezlogo.png"
import process from "../../ezassets/process.png"
import search from "../../ezassets/search.png"
import tool from "../../ezassets/tool.png"
import video from "../../ezassets/video.png"
function Card() {
  const img=[calender,ezlogo,process,tool,video,search]
  const heading=["Data Processing","Translation service" ,"Graphic design", 
    "Presentation Design","Audio visual presentation", "Reasearch & analyst"]
  const text=`Lorem ipsum dolor, sit amet consectetur adipisicing elit. ` 
  
  return (
    <div >
     <div className={styles.cardContainer}>
        
    {img.map((image,id)=>
    (<div className={styles.card}>
    <div className={styles.header}>
    <img src={image}  alt={`card${id}`} height={30} width={30}/>
    <h3>{heading[id]}</h3>
    </div>
    
    <div className={styles.cardText}>
    
            <p>{text}</p>
          </div>
    </div>

    ))}
     </div>
    </div>
  )
}

export default Card
