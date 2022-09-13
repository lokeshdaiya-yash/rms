import styles from './githubform.module.scss';
import { Modal, Button } from 'react-bootstrap';
/* eslint-disable-next-line */
export interface GithubformProps {
  show: boolean,
  handleClose():void,
  submitHandler(event: any): void,
  handlerUrlChange(event: React.FormEvent<HTMLInputElement>): void,
  url:string
}

export function Githubform({ show, handleClose, submitHandler, handlerUrlChange, url}: GithubformProps) {
  return (
    <div className={styles['container']}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GitHub URL</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
              <div className="input_div">
                <label htmlFor="exampleInputURl">URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputURl"
                  placeholder="Enter Your URL"
                  name="url"
                  value={url}
                  onChange={handlerUrlChange}
                />
              </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit' variant="primary" onClick={submitHandler}>
            SAVE
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Githubform;
