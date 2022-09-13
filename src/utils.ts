/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment"
export const getStartingDayOfWeek = (count = 0, date: Date = new Date()): Date => {
        const weekNum = moment(date).week()
        const reqDate: any = moment().day("Monday").week(weekNum - count)
        return new Date(reqDate.valueOf('_id'))
}
export const getLastDayOfWeek = (count = 0, date: Date = new Date()): Date => {
        const weekNum = moment(date).week()
        const reqDate: any = moment().day("Monday").week(weekNum - count)
        const sunday = reqDate.add('days', 6)
        return new Date(sunday.valueOf('_id'))
}

export const formatDate = (date: Date | string, format:string) => moment(date).format(format)

export const getWeekNumber = (date: Date) => {
        return moment(date).week()
}

export const commonParamForColomn = (width: any = 150, filterable = false, sortable = false) => {
        return {
                filterable,
                style: {
                        width: 'auto',
                        textAlign: 'center',
                },
                sortable,
                width,
        }
}
// more than 3
export const getStarRatedEmp = (empList: any[]) => empList.filter((emp: any) => {
        if (emp.weekRating !== undefined) {
                return emp.weekRating > 3
        } else {
                return (emp.communication + emp.interpersonalSkills + emp. technicalSkills) / 3 > 3
        }

})

//less than or equal 3
export const getLowRatedEmp = (empList: any[]) => empList.filter((emp: any) => {
        if (emp.weekRating !== undefined) {
                return emp.weekRating <= 3
        } else {
                return (emp.communication + emp.interpersonalSkills + emp.technicalSkills) / 3 <= 3
        }

} )

//tech filter
export const getTechFilteredEmp = (empList: any[], tech: string) => {
        return empList.filter((emp: any) => {
                if (Array.isArray(emp.comment)) {
                       return !!emp.comment.find((technology: string) => technology===tech)
                } else {
                    return  tech === emp.comment
                }
                
        })
}


export const filterHandler = (empList: any[], filteredCond: any) => {
        let filteredData = [...empList]

        if (filteredCond.star) {
                filteredData = getStarRatedEmp(filteredData)
        }
        if (filteredCond.low) {
                filteredData = getLowRatedEmp(filteredData)
        }
        if (filteredCond.techFilter) {
                filteredData = getTechFilteredEmp(filteredData, filteredCond.techFilter)
        }
        return filteredData
}

export function filterCaseInsensitive(filter: any, row: any) {
        const id = filter.pivotId || filter.id;
        return (
                row[id] !== undefined ?
                        String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
                        :
                        true
        );
}

export const buildQueryStringFromObj = (queryParams: any) => {
        return Object.entries(queryParams)
                .map((item) => `${item[0]}=${item[1]}`)
                .join("&");
};

export function getProgress(level: string): number {
        switch (level) {
                case 'novice':
                        return 20;
                case ' advanced beginner':
                        return 40;
                case 'competent':
                        return 60;
                case 'proficient':
                        return 80;
                case 'expert':
                        return 100;
                default:
                        return 0;
        }
}