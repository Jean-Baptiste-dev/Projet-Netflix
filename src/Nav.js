import React, { useEffect, useState } from "react";
import './Nav.css';

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
                handleShow(true);
            }else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);
    return (
<div className={`nav ${show && "nav_noir"}`}>
            <img
             className="nav__logo"
             src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png"
             alt="Logo Netflix"
            />
            <img
             className="nav__emoticone"
             src="https://www.i2symbol.com/pictures/emojis/0/8/7/a/087a22b487afeb8af62fbe890db727a2_384.png"
             alt="Emoticone"
            />
           

        </div>
    )
}

export default Nav