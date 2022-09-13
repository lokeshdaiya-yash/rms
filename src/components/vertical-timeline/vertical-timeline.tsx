import styles from './vertical-timeline.module.scss';
import '../timeline/timeline.scss';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useNavigate } from 'react-router-dom';

import {
  getCourseByTech,
  getBackgroundColorForStatus,
  getDateForCourse,
  getURL,
  getDateByTechnology,
  isAnyOnGoingCourse,
  isStartCourseBtnDisable,
  isEndCourseBtnDisable,
} from '../../services/timeline.service';

/* eslint-disable-next-line */
export interface VerticalTimelineProps {
  isLoading: boolean;
  timeLine: [];
  setTimeline(
    technology: string,
    hasCourseStarted: boolean,
    index: number
  ): void;
  handleShow(tech: string, index: number): void;
  id: string;
  user: { username: string; designation: string };
}

export function VerticalTimelineCom({
  isLoading,
  timeLine,
  setTimeline,
  handleShow,
  id,
  user,
}: VerticalTimelineProps) {
  const navigate = useNavigate();

  return (
    <div className={styles['container']}>
      
        {user !== null ? ( 
          <div>        
            <h4>Name: {user.username}</h4>
            <p>Designation: <span className="title">{user.designation}</span></p>
            <hr />
            </div>
        ) : null}
     
      <VerticalTimeline>
        {timeLine?.map((course: any, index: number) => (
          <VerticalTimelineElement
            className={'vertical-timeline-element--work'}
            date={getDateForCourse(course)}
            contentStyle={{
              background: 'white !important',
              color: 'black',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              fontFamily: 'var(--bs-body-font-family)',
              fontWeight: 'var(--bs-body-font-weight)',
            }}
            key={course.tech_name}
            contentArrowStyle={{
              borderRight: '7px solid  #eee',
              border: 'red',
            }}
            iconStyle={{ background: '#4285F4', color: '#fff' }}
            icon={
              <div>
                <img
                  className={styles['skill-img']}
                  src={getURL(course.tech_name)}
                  alt=""
                  height={50}
                  width={50}
                />
              </div>
            }
          >
            <p className="float-end mt-1 rounded-pill">
              <span
                className="rounded-pill p-2"
                style={{
                  backgroundColor: getBackgroundColorForStatus(course.status),
                  color: 'white',
                }}
              >
                {course.status}
              </span>
            </p>
            <div>
              <h3 className="vertical-timeline-element-title">
                {course.title}
              </h3>

              <p>{course.topics}</p>
              <p>{course.description}</p>
              <a href={course.githubLink} target="_blank" rel="noreferrer">
                Click here for github link
              </a>
              <p
                className="vertical-timeline-element-title"
                dangerouslySetInnerHTML={{ __html: course.course }}
              />
              {isStartCourseBtnDisable(
                getCourseByTech(course, timeLine),
                timeLine
              ) && !isEndCourseBtnDisable(course, timeLine) ? (
                <button
                  type="button"
                  disabled={
                    id !==
                    JSON.parse(localStorage.getItem('userdata') as string)?.user
                      ?.id
                  }
                 
                  className={'btn_1 btn btn-primary'}
                  data-testid="btnContinue"
                >
                  Continue Course
                </button>
              ) : (
                <button
                  type="button"
                  disabled={
                    id !==
                      JSON.parse(localStorage.getItem('userdata') as string)
                        ?.user?.id || isStartCourseBtnDisable(course, timeLine)
                  }
                  onClick={() => {
                    setTimeline(course.tech_name, false, index);
                  }}
                  className={'btn_1 btn btn-primary'}
                  data-testid="btnStartCourse"
                >
                  Start Course
                </button>
              )}
              <button
                type="button"
                disabled={
                  id !==
                    JSON.parse(localStorage.getItem('userdata') as string)?.user
                      ?.id || isEndCourseBtnDisable(course, timeLine)
                }
                onClick={() => {
                  handleShow(course.tech_name, index);
                }}
                className="btn_2 ms-2 btn btn-danger"
                data-testid="btnEndCourse"
              >
                End Course
              </button>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default VerticalTimelineCom;
