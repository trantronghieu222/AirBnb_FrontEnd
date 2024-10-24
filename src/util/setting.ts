import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { getDataTextStorage } from "./utilMethod";

export const AccessToken: string = 'accessToken';
export const USER_LOGIN: string = 'userlogin';
export const imgPath = 'http://localhost:8080/public/imgs/'

export const DOMAIN: string = 'http://localhost:8080';

export const httpClient = axios.create({
    baseURL: DOMAIN,
    timeout: 30000
})

httpClient.interceptors.request.use(
    (req: InternalAxiosRequestConfig<any>) => {
        let token = getDataTextStorage(AccessToken);
        if (token) {
            token = token.replace(/^"(.*)"$/, '$1');
        }
        if (req.headers) {
            req.headers['Authorization'] = token ? `Bearer ${token}` : '';
        }
        return req;
    }, (err: AxiosError) => {
        return Promise.reject(err);
    })

httpClient.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)