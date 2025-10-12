import React from "react";
import Header from "../../components/Header";
import {QRCodeSVG} from "qrcode.react"; 
import {useState} from 'react'; 
import "./Ticket.css"; 

function Ticket(){

    //The qr code information
    const [qrCodeUrl, setQrCodeUrl] = useState(
        {
            url : ''
        }
    )

    //Allows to change the id for the qr code
    const editQrCode = (event) => {

        const {name, value} = event.target; 
        
        setQrCodeUrl({...qrCodeUrl, [name] : value });

    }

    return (
        <>
        <Header/>

        <label className='something'>Enter URL:
            <input type="text" id="url" name="url" value ={qrCodeUrl.url} onChange={editQrCode} placeholder="http://google.com"/>
        </label>

        <br/>
              
        {/* This only appears if the user enters the url of the website they want to visit*/}
        <div>
            {qrCodeUrl.url != ""? (

                <QRCodeSVG  value = {qrCodeUrl.url} size="256"/>

            ):(
                <p></p>
            )

            }
        </div>

        </>


    )
}

export default Ticket;