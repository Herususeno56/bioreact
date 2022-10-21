import React from 'react'
import styles from './Tiga.module.css'

const Tiga = () => {
  return (
	<>  
        <h3>Komentar</h3>
        <div className={`${styles.container}`}> 
       
        <form>
        <div className={`${styles.form}`}>
        
        <input type="text" name="email" id="email" placeholder="Masukkan Email Anda" />
        <label for="email"></label>
        </div>
      
        <div className={`${styles.form}`}>
       
        <input type="text" name="komentar" id="komentar" placeholder="Masukkan Komentar Anda" />
        <label for="komentar"></label>
        </div>

        <a href=" " target="_blank rel= noreferre">Komentar</a>
        </form>
        </div>
	
  	</>
  )
}

export default Tiga