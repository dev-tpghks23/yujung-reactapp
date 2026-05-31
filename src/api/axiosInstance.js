import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:10000',  // ✅ 백엔드 포트 명시
    withCredentials: true,  // 쿠키 자동 포함 (JWT 토큰)
    baseURL: 'http://localhost:10000',
    withCredentials: true,
});

export default axiosInstance;