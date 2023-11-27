import React from "react";
import {useState} from "react";
import {Link} from "react-router-dom";

import styles from "../styles/Main.module.css";


const FIELDS = {
    USERNAME : " name",
    ROOM: "room",
};

const Main = () => {

    const { USERNAME, ROOM} = FIELDS;

    const [values, setValues] = useState({ [NAME]: "", [ROOM]: ""});

    const handleChange = () => ({ target : {value, name}}) => {
        setValues({ ...values, [name]: value});
    };

    const handleClick = (e) => {
        const isDisabled = Object.values(values).some((v) => !v);

        if(isDisabled) e.preventDefault();
    };

         
    return (
        <div className = {styles.wrap}>
            <div className = {styles.container}>
            <h1 className = {styles.heading}> Join</h1>

            <form className = {styles.form}> 
            <div className = {styles.group}>
               <input type = "text" name="name"  placeholder = "Username" value = ""  className={styles.input} onChange = {() => {}} autoComplete = "off" required/> 
            </div>
            <div className = {styles.group}>
               <input type = "text" name="room" placeholder = "Room" value = ""  className={styles.input} onChange = {() => {}} autoComplete = "off" required/> 
            </div>

            <Link 
            className = {styles.group}
            onClick={handleClick}
            to = {`/chat?name=${values[NAME]}&room = ${values[ROOM]}`}>

            <button type = "submit" className = {styles.button}>
                Sign In
            </button>
        </Link>
       </form>
      </div>
    </div>
   );
};        


export default Main;
