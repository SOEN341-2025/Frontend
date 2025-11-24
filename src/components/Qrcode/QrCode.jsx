import { useState , useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./QrCode.css";
import { useSearchParams } from "react-router-dom";


export default function QrCode({selectedTicket}) {

  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("id");

  const [qrCodeUrl, setQrCodeUrl] = useState({ url: '' });

  useEffect(() => {
    if (selectedTicket) {
      setQrCodeUrl({ url: `ticket-${selectedTicket.id}` });
    }
  }, [selectedTicket]);

  return (
    <>
      <div className='urlStyle ticketContainer'>

        <br />

        <div className="qrContainer">
          {qrCodeUrl.url !== "" && (
            <QRCodeSVG value={qrCodeUrl.url} size={"40vw"} className="qrCodeBox"/>
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

