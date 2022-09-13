import styles from './profile.module.scss';
import userImg from '../../assets/images/avatar.png';
import { Tabs, Tab } from 'react-bootstrap';
import TimeLine from '../../components/timeline/timeline';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Profileskills from '../../components/profileskills/profileskills';
import Profileprojects from '../../components/profileprojects/profileprojects';
import Projectsdetails from '../../components/projectsdetails/projectsdetails';
import { Project } from '../../constants/interface/project';
import { UserDetail } from '../../constants/interface/profile';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { PROFILE_API } from '../../constants/apiUrl';
import { authClass } from '../../components/auth/services/auth.service';
const user = {candidateId: "62b030eef8eb23fbe7d02d0f",
email:"anurag.chandra@yash.com",
id:'6316ea58401faabbefedd618'
}
/* eslint-disable-next-line */
export interface UserProfileProps {}

const projectInitial = {
  projectTitle: '',
  startDate: '',
  description: '',
  endDate: '',
  technology: [{ label: '', value: '' }],
};

const userDetailInitialValue = {
  firstName: '',
  lastName: '',
  designation: '',
  email: '',
  skills: [],
  projects: [],
};
export function UserProfile(props: UserProfileProps) {
  const [show, setShow] = useState(false);
  const [userData, setUserData] = useState<UserDetail>(userDetailInitialValue);
  const [projectDetails, setProjectDetails] = useState<Project>(projectInitial);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [key, setKey] = useState('skills');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('tab'));

  useEffect(() => {
    const userId = user
      .id;
    setIsLoading(true);
    authClass.getProfile(1)
      .then((userData:any) => {
        if (userData.data) setUserData(userData.data);

        setIsLoading(false);
      })
      .catch((err:any) => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {

    const tabValue = searchParams.get('tab');

    if (tabValue) setKey(tabValue);
    else setKey('skills');
  }, []);

  useEffect(() => {
    console.log(key);
  }, [key]);

  // Modal Open & Close
  const handleClose = () => {
    setProjectDetails(projectInitial);
    setShow(false);
  };
  const onTabSelect = (k: any) => {
    navigate({
      pathname: '',
      search: `?tab=${k}`,
    });
    setKey(k);
  };
  const handleShow = () => setShow(true);

  const setProjectDetailHandler = (projDetails: Project) => {
    setProjectDetails(projDetails);
  };

  return (
    <div className={styles['user-profile-container']}>
      <div className={'row align-items-center '}>
        <div className="col col-md-2">
          <div className={styles['image-container']}>
            <img className={styles['content-img-img']} src={userImg} alt="" />
          </div>
        </div>

        <div className={'col col-md-6 ' + styles['user-info']}>
          <div className={styles['user-info-name']}>
            {userData.firstName} {userData.lastName}
          </div>
          <div className={styles['user-info-designation']}>
            {userData.designation}
          </div>
          <div className={styles['user-info-email']}>
            <i
              className={'fa fa-envelope ' + styles['email-icon']}
              aria-hidden="true"
            ></i>
            <div>{userData.email}</div>
          </div>
        </div>
      </div>

      <div className={'tab-wrapper  ' + styles['skill-top']}>
        <div className="row">
          <div className="col-sm-12">
            <Tabs
              onSelect={(k: any) => onTabSelect(k)}
              defaultActiveKey={key}
              className={' ' + styles['skill-color']}
            >
              <Tab eventKey="skills" title="Skills">
                <Profileskills
                  isLoading={isLoading}
                  skills={userData?.skills}
                />
              </Tab>

              <Tab eventKey="projects" title="Projects">
                <Profileprojects
                  isLoading={isLoading}
                  projects={userData.projects}
                  setProjectDetailHandler={setProjectDetailHandler}
                  handleShow={handleShow}
                />
                <Projectsdetails
                  show={show}
                  handleClose={handleClose}
                  projectDetails={projectDetails}
                />
              </Tab>

              <Tab eventKey="roadmap" title="Roadmap">
                {/* {key === 'roadmap' && } */}
                <TimeLine></TimeLine>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
