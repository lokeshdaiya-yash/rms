export interface RatedEmpList {
        _id: string,
        "userId": string,
        "interpersonalSkills": number,
        "technicalSkills": number,
        "communication": number,
        "comment": string | string[],
        "createdBy": string,
        "weekStartDate": string,
        "weekEndDate": string,
        "weekNumber": number,
        "year": number,
        "weekRating": number,
        "createdAt": string,
        "__v": number,
        "userDetail": { username: string }[]
        "name": string
}

