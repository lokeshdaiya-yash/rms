export interface Technology{
        value?: string,
        label?: string,
        name?: string
}

export interface Project {
        projectTitle?:string,
        description?:string,
        startDate:string,
        endDate:string,
        _id?:string,
        technology?: Technology[]
}
