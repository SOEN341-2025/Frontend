import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./Ticket.css";
import "../addEventPage/addEventPage.css";
import { useSearchParams } from "react-router-dom";

function Ticket() {
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("id");

  const [qrCodeUrl, setQrCodeUrl] = useState({ url: '' });

  const editQrCode = (event) => {
    const { name, value } = event.target;
    setQrCodeUrl({ ...qrCodeUrl, [name]: value });
  };

  return (
    <>
      <div className='urlStyle ticketContainer'>
        <label className='ticketLabel'>Enter URL:
          <input
            className="ticketInput"
            type="text"
            id="url"
            name="url"
            value={qrCodeUrl.url}
            onChange={editQrCode}
            placeholder="http://google.com"
          />
        </label>

        <br />

        <div className="qrContainer">
          {qrCodeUrl.url !== "" && (
            <QRCodeSVG value={qrCodeUrl.url} size={256} className="qrCodeBox"/>
          )}

          {/* Always show ticket QR for claimed event */}
          {eventId && (
            <QRCodeSVG value={`ticket-${eventId}`} size={256} className="qrCodeBox"/>
          )}
        </div>
      </div>
    </>
  );
}

export default Ticket;
