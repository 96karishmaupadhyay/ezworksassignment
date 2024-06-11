import React, { useState } from 'react'
import Card from '../Card/Card'
import ez from "../../ezassets/ezicon.png"
import styles from "./Form.module.css"
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { css } from 'goober';

function Form() {
  const { enqueueSnackbar } = useSnackbar();
  const [email,setEmail]=useState("")
  
  
  const handleContact = async (e) => {
    e.preventDefault();
    if (!email) {
      enqueueSnackbar('Email is missing', { variant: 'error' });
      return;
    }
    try {
      const response = await axios.post('http://34.225.132.160:8002/api', { email });
      if (response.status === 422) {
        enqueueSnackbar(response.data.message, { variant: 'error' })
 } else if (response.status === 200) {
        enqueueSnackbar('Mail Sent', { variant: 'success' })
      } else {
        enqueueSnackbar('An error occurred', { variant: 'error' })
      }
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }
  return (
    <div>
      {/* <Card/> */}
      <div className={styles.container}>
      <div>
      <img src={ez} alt="" height={50}/>
      <p className={styles.maintext}>A suite of Business and support services</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum repellat quam perferendis necessitatibus numquam fugit rem adipisci quo minus soluta inventore
       illo cupiditate, hic nostrum animi. Sit modi repellat recusandae!</p>
       <form action="" className={styles.form}>
       <input type="email" value={email}
       placeholder='Email address' onChange={(e) => setEmail(e.target.value)} className={styles.email}/>
       <button onClick={handleContact} className={styles.btn}>Contact me</button>
       </form>
      </div>
      <div>
       <Card/>
       </div>
     </div>
    
    </div>
  )
}

export default Form
