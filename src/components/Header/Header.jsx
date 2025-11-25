import React, {useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import user_login_white from "../../assets/LoginSignup/user_login_white.png";
import { NavLink } from "react-router-dom";


export default function Header() {
  return (
    <header>

      <table>
        <thead>
          <tr>
            <th style={{'padding-right': '0', 'padding-bottom': '0'}}>
              <NavLink to= "/">
                <img src={logo} alt="logo"/>
              </NavLink>
            </th>
            <th className="headerCenter">WORKSHOPS</th>
            <th className="headerCenter">TECH</th>
            <th className="headerCenter">NETWORKING</th>
            <th className="headerCenter">BUSINESS</th>
            <th className="headerCenter">VOLUNTERRING</th>
            <th style={{'text-align': 'right'}}><img style={{width:'40px', 'padding-top': '25px'}}src={user_login_white} alt="User icon"/></th>
          </tr>
        </thead>
      </table>

    </header>
  );
}
