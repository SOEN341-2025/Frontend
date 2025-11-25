import { useState } from "react";
import QrScanner from "qr-scanner";

export default function App() {
  const [result, setResult] = useState("");

  const handleFile = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const text = await QrScanner.scanImage(file);
    setResult(text);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFile} />
      <p>Result: {result}</p>
    </div>
  );
}
