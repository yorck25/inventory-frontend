import { useHelperContext } from "./helperContext";

export enum HTTPMethods {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const GetDefaultHeader = () => {

    const myHeaders = new Headers();
    myHeaders.append("token", getTokenLocalStorage());
    myHeaders.append("Content-Type", "application/json");

    return myHeaders;
}

const getTokenLocalStorage = () => {
    const token = localStorage.getItem('token');
    if (token != null) return token;
    return '';
};