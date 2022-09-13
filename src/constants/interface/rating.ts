export interface getColomnForGiveRatingProps {
        checkboxHandler(index: number): void,
        changeHandler(e: React.FormEvent<HTMLInputElement>, index: number): void,
        updateEmpRatingById(row: any): void,
        singleEmpRating(row: any): void,
        handleDesignationFilter(row: any): void,
        styles: any,
        data: any,
        designationFilterList: any
}