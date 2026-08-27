// Định nghĩa kiểu dữ liệu môn học khớp với CourseDTO ở Backend
export interface CourseDTO {
    id: number;
    tenMonHoc: string;
    soTinChi: number;
    soChoToiDa: number;
    soChoConLai?: number;
}

// Kiểu dữ liệu Đăng nhập thành công
export interface LoginResponseDTO {
    token: string;
    username: string;
    role: string;
}

// Kiểu dữ liệu Đăng ký môn học
export interface RegistrationDTO {
    id?: number;
    studentId: number;
    courseId: number;
    registrationDate?: string;
}