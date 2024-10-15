import IUser from "../model/IUser";

const baseUrl='https://jsonplaceholder.typicode.com/users';
const getUsers = (): Promise<IUser[]> => {
    return fetch(baseUrl)
        .then(value => value.json())

}
const getUser = (id: number): Promise<IUser> => {
    return fetch(baseUrl + '/' + id)
        .then(value => value.json())
}

export {
    getUsers,
    getUser
};