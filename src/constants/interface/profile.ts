import {Project} from './project'
import { Skill } from './profileskills'

export interface UserDetail {
        firstName:string,
        lastName:string,
        designation:string,
        email: string,
        skills: Skill[],
        projects: Project[]
}

