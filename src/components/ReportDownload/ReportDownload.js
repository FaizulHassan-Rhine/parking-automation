import React, { useEffect } from 'react';
import Report from '../Report/Report';
import { usePDF } from 'react-to-pdf';

const ReportDownload = ({vehicle}) => {
    const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

    useEffect(() => {
        toPDF() 
    },[])

    return (
       <div>
          {/* <button onClick={() => toPDF()}>Download PDF</button> */}
          <div ref={targetRef} className='fixed left-[1999px]'>
             <Report vehicle={vehicle}/>
          </div>
       </div>
    )
};

export default ReportDownload;