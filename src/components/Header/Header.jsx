import React, {useState} from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import user_login_white from "../../assets/LoginSignup/user_login_white.png";


export default function Header() {
  return (
    <header>

      <table>
        <thead>
          <tr>
            <th style={{'padding-right': '0', 'padding-bottom': '0'}}>
              <img src={logo} alt="logo"/>
            </th>
            <th className = "center-header">WORKSHOPS</th>
            <th className = "center-header">TECH</th>
            <th className = "center-header">NETWORKING</th>
            <th className = "center-header">BUSINESS</th>
            <th className = "center-header">VOLUNTERRING</th>
            <th style={{'text-align': 'right'}}><img style={{width:'40px', 'padding-top': '25px'}}src={user_login_white} alt="User icon"/></th>
          </tr>
        </thead>
      </table>

    </header>
  );
}
