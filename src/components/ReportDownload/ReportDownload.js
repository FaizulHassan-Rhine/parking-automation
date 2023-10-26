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
          <div  className='fixed p-5 left-[1999px] flex flex-col justify-center items-center'>
            <div ref={targetRef} className='p-10 justify-self-center' >
               <Report vehicle={vehicle}/>
            </div>
          </div>
       </div>
    )
};

export default ReportDownload;