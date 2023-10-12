import React from 'react';

import styles from './Direccion.module.css';
import { FaBuilding, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Direccion = () => {

  

  return (
    <div className={styles.contenedorprincipal}>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}><FaBuilding /> Planta 1</h2>
        <p className={styles.addressText}><FaMapMarkerAlt /> Colombia, Cundinamarca</p>
        <p className={styles.addressText}><FaMapMarkerAlt /> Cota, Siberia Sector Parcelas</p>
        <p className={styles.addressText}><FaPhoneAlt /> Celular: 3143433954</p>
        <p className={styles.addressText}><FaEnvelope /> Correo: ernestobarmor@hotmail.com</p>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2147332522945!2d-74.27938532414831!3d4.732724941377297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f79b8209c7f25%3A0x8cf88a78f2212ff6!2sCra.%2020a%20%232-33%2C%20Madrid%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1697082123025!5m2!1ses!2sco" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 
    
      </div>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}><FaBuilding /> Planta 2</h2>
        <p className={styles.addressText}><FaMapMarkerAlt /> Colombia, Cundinamarca</p>
        <p className={styles.addressText}><FaMapMarkerAlt /> Tenjo, Siberia Sector la Punta</p>
        <p className={styles.addressText}><FaPhoneAlt /> Celular: 3143433954</p>
        <p className={styles.addressText}><FaEnvelope /> Correo: ernestobarmor@hotmail.com</p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2147332522945!2d-74.27938532414831!3d4.732724941377297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f79b8209c7f25%3A0x8cf88a78f2212ff6!2sCra.%2020a%20%232-33%2C%20Madrid%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1697082123025!5m2!1ses!2sco" width="400" height="300" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 
    
      </div>
    </div>
  );
};

export default Direccion;
