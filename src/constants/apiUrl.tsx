/**
 * @since Feb 2022
 * @author Ankit Patidar
 * @uses Constant file only for api urls
 * 
*/

import { environment } from "../environments/environment";

export const LOGIN_API:string = `${environment.baseUrl}auth` as string;
export const LOGOUT_API:string = `${environment.baseUrl}logout` as string;
export const SIGNUP_API:string = `${environment.baseUrl}register` as string;
export const FORGOT_API:string = `${environment.baseUrl}auth/forgot-password` as string;
export const RESET_API:string = `${environment.baseUrl}auth/reset-password` as string;
export const USERPROFILE_API: string = `${environment.baseUrl}userProfile/` as string;
export const USER_FOR_RATING_API: string =`${environment.baseUrl}user/` as string;
export const TIMELINE_API: string = `${environment.baseUrl}timeline/` as string;
export const TIMELINE_POST_API: string = `${environment.baseUrl}timeline/startCourseAndEndCourseHandler` as string;
export const PROFILE_API: string = `${environment.baseUrl}userProfile/getUser` as string;
export const ADD_ONE_EMP_RATING_API: string =`${environment.baseUrl}rating/addOneEmpRating` as string;
export const UPDATE_RATING_API: string = `${environment.baseUrl}rating/updateEmpRatingById` as string;
export const RATING_POST_API: string = `${environment.baseUrl}rating` as string;
export const RATING_PATCH_API: string = `${environment.baseUrl}rating/updateMultipleRating` as string;
export const USER_PROFILE_API: string = `${environment.baseUrl}userProfile/getUser` as string;
export const USER_ROADMAP_API: string = `${environment.baseUrl}userProfile/getUsersRoadmapList` as string;
export const CURRENTWEEK_RATING_API: string = `${environment.baseUrl}rating/currentWeekData` as string;
export const RATINGBYYEAR_API: string = `${environment.baseUrl}rating/getRatingByYear/` as string;
export const GET_EMP_RATING_BY_DATE_API: string = `${environment.baseUrl}rating/getEmpRatingListByDateRange/` as string;
