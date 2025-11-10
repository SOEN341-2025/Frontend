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
            <th>WORKSHOPS</th>
            <th>TECH</th>
            <th>NETWORKING</th>
            <th>BUSINESS</th>
            <th>VOLUNTERRING</th>
            <th style={{'text-align': 'right'}}><img style={{width:'40px', 'padding-top': '25px'}}src={user_login_white} alt="User icon"/></th>
          </tr>
        </thead>
      </table>

    </header>
  );
}
