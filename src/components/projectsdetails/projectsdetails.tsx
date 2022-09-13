import styles from './projectsdetails.module.scss';
import { Modal, Button } from 'react-bootstrap';
import { formatDate } from '../../utils';
import { Project } from '../../constants/interface/project';
/* eslint-disable-next-line */
export interface ProjectsdetailsProps {
  handleClose(): void;
  show: boolean;
  projectDetails: Project;
}

export function Projectsdetails(props: ProjectsdetailsProps) {
  return (
    <div className={styles['container']}>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <div>
              <p>
                <b> Name :</b> {props.projectDetails.projectTitle}
              </p>
              <p>
                <b> Technology :</b>
                {props.projectDetails?.technology &&
                  props.projectDetails.technology
                    .map(({ label }) => label)
                    .join(', ')}
              </p>
              <p>
                <b> Start Date :</b>{' '}
                {formatDate(props.projectDetails.startDate, 'DD-MM-YYYY')}
              </p>
              <p>
                <b> End Date :</b>{' '}
                {formatDate(props.projectDetails.endDate, 'DD-MM-YYYY')}
              </p>
              <p>
                <b> Description :</b> {props.projectDetails.description}
              </p>
            </div>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="mt-0"
            variant="danger"
            onClick={() => props.handleClose()}
            data-testid="close-btn"
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projectsdetails;
