import { useHelperContext } from "./helperContext";

export enum HTTPMethods {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const GetDefaultHeader = () => {
    const { getTokenLocalStorage } = useHelperContext();

    const myHeaders = new Headers();
    myHeaders.append("token", getTokenLocalStorage());
    myHeaders.append("Content-Type", "application/json");

    return myHeaders;
}