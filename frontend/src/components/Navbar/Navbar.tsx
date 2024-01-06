import React, { useRef, useState } from "react";
import "./Navbar.css";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  const [formFocus, setFormFocus] = useState(false)
  return (
    <header className="nb_header">
      <div className="nb_logo">
        <AiOutlineMenu size={20} />
        <h1>Task Scheduler</h1>
      </div>
      <form action="" method="get" className={`nb_search ${(formFocus)?'borderFocus':''}`}>
        <AiOutlineSearch className="search_logo" />
        <input className="search_input" type="text" placeholder="search" onFocus={(e)=>{setFormFocus(!formFocus)}} onBlur={(e)=>{setFormFocus(!formFocus)}}/>
      </form>
      <div className="nb_list">
        <a href="#">Trial: 19 days left</a>
        <button className="nb_billing_button">Add billing info</button>
        <p className="nb_profile">AA</p>
      </div>
    </header>
  );
};

export default Navbar;
