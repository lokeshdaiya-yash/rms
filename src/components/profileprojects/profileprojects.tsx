import styles from './profileprojects.module.scss';
import Spinner from 'react-bootstrap/Spinner';
import { Project } from '../../constants/interface/project'
import projectImg from '../../assets/images/project.png';

/* eslint-disable-next-line */
export interface ProfileprojectsProps {
  isLoading: boolean,
  projects: Project[],
  handleShow(): void,
  setProjectDetailHandler(projDetails: Project):void
}

export function Profileprojects(props: ProfileprojectsProps) {
  
  return (
    <div className={styles['container']}>
      {
        props.isLoading && <div className={styles['spinner']}><Spinner animation="border" /></div>
      }
      {
        !props.isLoading && props.projects && props.projects.length > 0 &&
          <div className={styles['tab-item-wrapper']}>
            <div className="row">
              {props.projects.map((project: Project, index:number) => (
                  <div className={'col-xl-3 col-md-6 mb-4'} key={index}>
                    <div className={'profile-card ' + styles['cards']}>
                      <div className={styles["profile-card-body"]}>
                        <div className="row">
                          <span className="col">
                            <div className={styles['skill-img']}>
                              <img src={projectImg} alt="" />
                            </div>
                          </span>
                        </div>

                        <div className={styles['profile-card-heading']}>
                          {project.projectTitle}
                        </div>
                        <div
                          className={styles['profile-card-description']}
                        >
                          {/* {project.description} */}
                          <div
                            className={styles['view-more-link']}
                            onClick={() => { props.setProjectDetailHandler(project); props.handleShow() }}
                          >
                            View More
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
      }
      {
        !props.isLoading && props.projects && !props.projects.length && <div className={styles['no-skill']}>No project added</div>
      }
    </div>
  );
}

export default Profileprojects;

