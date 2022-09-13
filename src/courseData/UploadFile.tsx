import React, { useState } from 'react';
import '../courseData/common.scss';

import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';

import Preview from './Preview';
import ArrowBack from '@material-ui/icons/ArrowBack';

import Videoss from './Videoss';

export default function UploadFile({ courseData }: any) {
  const [state, setState] = useState<boolean>(false);
  const [showdata, setShowdata] = useState<boolean>(true);
  const [showdata1, setShowdata1] = useState<boolean>(false);

  const [showdata2, setShowdata2] = useState<boolean>(false);
  const [mypdf, setMypdf] = useState<string>('');
  const [myvideo, setMyvideo] = useState<string>('');

  return (
    <div className="course-d row d-flex">
      {showdata &&
        courseData?.courseName.map((data: any, index: number) => (
          <div className="col-md-3 mb-5">
            <MDBCard className="cards mdb-card-max-width">
              <MDBCardImage src={data.imgSrc} position="top" alt="..." />
              <MDBCardBody className="text-center card-body details">
                <MDBCardText>{data.title}</MDBCardText>
                <div className="row ">
                  {/* <div className="col-md-2 mar"> */}
                  <MDBBtn
                    className="ml-2 btn-c"
                    onClick={() => {
                      setState(!state);
                      setShowdata(false);
                      setShowdata1(true);
                      setShowdata2(false);
                      setState(state);
                      setMypdf(courseData.courseName[index].pdfFile);
                    }}
                  >
                    {data.days}
                  </MDBBtn>

                  <MDBBtn
                    className="mt-2"
                    onClick={() => {
                      setState(!state);
                      setShowdata(false);
                      setShowdata2(true);
                      setShowdata1(false);

                      setState(state);
                      setMyvideo(courseData.courseName[index].videos);
                      console.log(data.videos);
                    }}
                  >
                    video
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      {!showdata && showdata1 && (
        <div>
          <div>
            <button
              onClick={() => {
                setShowdata(true);
              }}
              className="btn btn-primary mb-2 ms-3 float-right"
            >
              <ArrowBack />
            </button>
          </div>
          <Preview mypdf={mypdf} />
        </div>
      )}
      {!showdata && showdata2 && (
        <div>
          <div>
            <button
              onClick={() => {
                setShowdata(true);
              }}
              className="btn btn-primary mb-2 ms-3 float-right"
            >
              <ArrowBack />
            </button>
          </div>

          <Videoss myVideo={myvideo} />
        </div>
      )}
    </div>
  );
}
