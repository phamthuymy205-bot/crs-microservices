export interface Course {
    id: number;
    tenMonHoc: string;
    soTinChi: number;
    soChoToiDa: number;
    soChoConLai: number;
}

export interface PagedResponse<T> {
    content: T[];
    totalElements: number;
    totalPages: number;
    number: number;
    size: number;
}
// path: crs-frontend/src/types/course.ts

export interface CourseFormValues {
    tenMonHoc: string;
    soTinChi: string;
    soChoToiDa: string;
}

export const emptyCourseForm: CourseFormValues = {
    tenMonHoc: '',
    soTinChi: '',
    soChoToiDa: '',
};