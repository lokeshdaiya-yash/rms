import React, { useState, useEffect, useRef } from 'react';
import './common.scss';

import { usePdf } from '@mikecousins/react-pdf';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Preview = ({ mypdf }: any) => {
  const [page, setPage] = useState(1);
  const canvasRef = useRef(null);
  const { pdfDocument, pdfPage } = usePdf({
    file: mypdf,
    page,
    canvasRef,
  });

  return (
    <div>
      <div className="pdf-view mx-auto">
        {!pdfDocument && <span>Loading...</span>}
        <canvas ref={canvasRef} className="class= w-150  p-3" />
      </div>
      <div></div>
      {Boolean(pdfDocument && pdfDocument.numPages) && (
        <ul className="pager">
          <div className="row mt-3">
            <div className="col">
              <li className="previous">
                <button
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="btn btn-primary prev_btn"
                >
                  <ArrowBackIosIcon />
                </button>
              </li>
            </div>
            <div className="col">
              <li className="next">
                <button
                  className="btn btn-primary "
                  disabled={page === pdfDocument.numPages}
                  onClick={() => setPage(page + 1)}
                >
                  <ArrowForwardIosIcon />
                </button>
              </li>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
};

export default Preview;
