/* eslint-disable no-useless-escape */
import './timeline.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { isURLValid } from '../../services/timeline.service'
import Githubform from '../../components/githubform/githubform'
import { notifyWarning, notifyError, notifySuccess } from '../../services/notification.service'
import VerticalTimeline from '../vertical-timeline/vertical-timeline';
import {
  TIMELINE_API,
  TIMELINE_POST_API,
} from '../../constants/apiUrl';
import { useLocation } from 'react-router-dom';
import { authClass } from '../auth/services/auth.service';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimeLineProps { }

export function TimeLine(props: TimeLineProps) {
  
  const location = useLocation();
  const [userData, setUserData] = useState<any>(location.state !== '' ? location.state : null);
  const [timelineData, setTimelineData] = useState<any>([]);
  const [show, setShow] = useState(false)
  const [URL, setURL] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [technology, setTechnology] = useState<string>("");
  const [indexNumber, setIndexNumber] = useState<number>(0);
  const navigate = useNavigate();
  const { id } = useParams();
  const user = {
    id:"545"
  }
  const getTimelineData = () => {
    setIsLoading(true)
    //let userId = JSON.parse(localStorage.getItem('userdata') as string).user
    let userId = user
      .id;
    
    authClass.getTimelineData(id).then((res:any) => {
          setTimelineData(res.data.roadmap);
          setIsLoading(false);
        })
        .catch(( response:any ) => {
          notifyError(response?.data?.error?.message);
          setIsLoading(false);
        });
  };

  const setTimeline = (technology: string, hasCourseStarted: boolean, index: number): void => {
    const userId = JSON.parse(localStorage.getItem('userdata') as string).user
      .id;
    axios
      .post(`${TIMELINE_POST_API}`, {
        userId,
        technology,
        hasCourseStarted,
        githubLink: URL,
      })
      .then((res) => {
        notifySuccess(res?.data?.message);
        getTimelineData();
      })
      .catch(({ response }) => {
        notifyError(response?.data?.error?.message);
        setIsLoading(false);
      });

  };

  useEffect(() => {
    getTimelineData();
  }, []);


  // Modal Open & Close 
  const handleClose = () => { setShow(false) };
  const handleShow = (tech: string, index: number) => { setTechnology(tech); setShow(true); setIndexNumber(index)}


  const submitHandler = (event: any): void => {
    event.preventDefault();

    if (!isURLValid(URL)) {
      notifyWarning('Invalid URL')
    } else {
      setTimeline(technology, true, indexNumber)
      setShow(false)
    }
  }

  return (
    <div
      className="timeline-main"
    >
      <Githubform
        show={show}
        handleClose={handleClose}
        submitHandler={submitHandler}
        handlerUrlChange={(event: React.FormEvent<HTMLInputElement>) => setURL((event.target as HTMLInputElement).value)}
        url={URL} />

      <VerticalTimeline
        isLoading={isLoading}
        timeLine={timelineData || []}
        setTimeline={setTimeline}
        handleShow={handleShow}
        id={id || user.id}
        user={userData}
      />
    </div>
  );
}
export default TimeLine;
