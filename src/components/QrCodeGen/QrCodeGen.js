import React, { createRef, useEffect } from 'react';

const QrCodeGen = ({qrString="helo"}) => {

    const qrCodeRef = createRef();

    useEffect(() => {
        new QRCode(qrCodeRef.current, {
            text: qrString,
            width: 300,
            height: 300
        });
    }, []);

    return (
        <div>
            <div ref={qrCodeRef} />
        </div>
    );
};

export default QrCodeGen;