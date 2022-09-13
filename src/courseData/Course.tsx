import React from 'react';
import '../courseData/common.scss';
import UploadFile from './UploadFile';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { useNavigate, useLocation } from 'react-router-dom';

function Course() {
  const navigate = useNavigate();
  const { state } = useLocation();
  return (
    <div className="row">
      <div className="col-md-12 ">
        <button
          className="btn btn-primary  m-3 course-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <KeyboardBackspaceIcon></KeyboardBackspaceIcon>Go Back
        </button>
      </div>

      <div className="col-md-12 mt-2 mx-auto">
        <UploadFile courseData={state} />
      </div>
    </div>
  );
}

export default Course;
