import styles from './profileskills.module.scss';
import Spinner from 'react-bootstrap/Spinner';
import { getProgress } from '../../utils';
import { Skill } from '../../constants/interface/profileskills';
/* eslint-disable-next-line */
export interface ProfileskillsProps {
  isLoading: boolean;
  skills: Array<Skill>;
}

export function Profileskills(props: ProfileskillsProps) {
  return (
    <div className={styles['container']}>
      {props.isLoading && (
        <div className={styles['spinner']}>
          <Spinner animation="border" />
        </div>
      )}

      {!props.isLoading && props.skills && props.skills.length > 0 && (
        <div className={'tab-item-wrapper'}>
          <div className={'row ' + styles['skill-row']}>
            {props.skills.map((skill: Skill, index:number) => (
              <div className={styles['skill-bg']} key={index}>
                <div className={styles['skill-margin']} >{skill.skillType}</div>
                <div className={'progress ' + styles['progress']}>
                  <div
                    className={'progress-bar'}
                    style={{
                      width: getProgress(skill.proficiency) + '%',
                      backgroundColor: '#3a2f9c',
                    }}
                  ></div>
                  <div className={styles['progress-value']}></div>
                </div>
                {getProgress(skill.proficiency) + ' % '}
              </div>
            ))}
          </div>
        </div>
      )}

      {!props.isLoading && props.skills && !props.skills.length && (
        <div className={styles['no-skill']}>No Skill added</div>
      )}
    </div>
  );
}

export default Profileskills;
