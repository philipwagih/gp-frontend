import React from 'react';
import '../../App.css';
import { useState } from 'react';
import QRCode from 'react-qr-code';
import QrScanner from 'qr-scanner';

function Qrscreen() {
  const [inputvalue, setInputvalue] = useState("")
  const [result, setResult] = useState("")
  // QR Code Qenerator and Downloader API
  /* QR Code Download function*/
  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download =`${inputvalue}`;
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  }
  // QR Code Reader API
  const readQcode = (e) => {
    const file = e.target.files[0];
    if (!file) {
        return;
    }
    QrScanner.scanImage(file, { returnDetailedScanResult: true })
        .then(result => console.log(result.data))
        .catch(e => console.log(e));
  }

    return (
      <>
      {/* show the QR Code */}
      <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
      <QRCode
        size={256}
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={inputvalue}
        viewBox={`0 0 256 256`}
        id="QRCode"
      />
      </div>
      <div>
        <input type="text" onChange={(e) => setInputvalue(e.target.value)}></input>
        <input type="button" onClick={download} value="download"></input>
      </div>
      <div>
        <input type="file" onChange={(e) => readQcode(e)}></input>
      </div>
      </>
    );
  }
  
  export default Qrscreen;