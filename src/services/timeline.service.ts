
import moment from 'moment';
import { formatDate } from '../utils'
export const getCourseByTech = (courseName: string, coureList: any[]) => coureList.find((course: any) => course.tech_name === courseName) || {}

export const getOngoingCourse = (timelineData: any) =>
        timelineData.find(
                (element: any) =>
                        moment().isBetween(element.startDate, element.endDate) ||
                        moment().isSame(element.startDate, 'day') ||
                        moment().isSame(element.endDate, 'day')
        ) || {};

export const getNumberOfDays = (start: any, end: any, tech: string, timelineData: any) => {
        const activeCourseData = getOngoingCourse(timelineData);
        if (activeCourseData.tech_name !== tech) return '';
        const date2 = new Date(end);

        const a = moment(start);
        const b = moment(date2);

        return b.diff(a, 'days') + ' days remaining.';

}

export const isAnyOnGoingCourse = (timelineData: any) => {
        return !!timelineData.find((course: any) => course.status === 'ongoing')
}

export const isEndCourseBtnDisable = (course: any, timelineData: any) => {

        if (!course.startDate) return true
        if (course.status === 'ongoing') return false
        if (course.status === 'completed') return true

        if (isAnyOnGoingCourse(timelineData)) return true
        return false
}

export const isStartCourseBtnDisable = (course: any, timelineData: any) => {

        if (course.status === 'completed') return true
        if (isAnyOnGoingCourse(timelineData)) return true
        if (course.startDate) return true
        return false
}


export const getDateByTechnology = (tech: string, timelineData: any) => {
        const { startDate, endDate } =
                timelineData?.find((element: any) => {
                        return element.tech_name === tech;
                }) || {};
        if (startDate && endDate) {
                return { startDate, endDate };
        }
        return {};
};


export function getURL(tech_name: string): string {
        let url;
        switch (tech_name) {
                case 'Java':
                        url = '/assets/images/java.jpg';
                        break;
                case 'JAVASCRIPT':
                        url = '/assets/images/jsc.jpg';
                        break;
                case 'ANGULAR':
                        url = '/assets/images/angular.png';
                        break;
                case 'ANGULAR_UNIT_TESTING':
                        url = '/assets/images/jasmine.png';
                        break;
                case 'ANGULAR_STATE_MANAGEMENT':
                        url = '/assets/images/ngrx.png';
                        break;
                case 'REACT':
                        url = '/assets/images/react.png';
                        break;
                case 'REDUX_STATE_MANAGEMENT':
                        url = '/assets/images/redux.png';
                        break;
                case 'REACT_UNIT_TESTING':
                        url = '/assets/images/jest.png';
                        break;
                case 'HTML_CSS_BOOTSTRAP':
                        url = '/assets/images/html1.png';
                        break;
                case 'NODE':
                        url = '/assets/images/node.png';
                        break;
                case 'VUE':
                        url = '/assets/images/vue.png';
                        break;
                case 'VUE_STATE_MANAGEMENT':
                        url = '/assets/images/vuex.png';
                        break;
                case 'VUE_UNIT_TESTING':
                        url = '/assets/images/test.png';
                        break;
                default:
                        url = '/assets/images/blank.png';
                        break;
        }
        return url;
}



export const isURLValid = (URL:string) => {
        const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
        const regex2 = new RegExp('(http?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')

        return regex.test(URL) || regex2.test(URL)
}

export const getDateForCourse = ({ startDate, endDate }:any): string => {
        if (startDate && endDate) {
                return formatDate(startDate, 'DD-MM-YYYY') + ' - ' + formatDate(endDate, 'DD-MM-YYYY')
        }
        return ''
}

export const getBackgroundColorForStatus = (status:string):string => {
        if (status === "ongoing") return "orange"
        if (status === "completed") return "green"
        return ""
}


export const getCompletedCourseName = (roadmap: any):string => {
        if (!roadmap) return '-'
        
        return roadmap.filter(({ status }:any) => status === "completed").map(({ title }:any) => title).join(", ") || "-"
}

export const getOnGoingCourseName = (roadmap: any): string => {
        if (!roadmap) return '-'

        return roadmap.filter(({ status }: any) => status === "ongoing").map(({ title }: any) => title).join(", ") || "-"
}