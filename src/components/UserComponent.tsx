import React, {FC, useState} from 'react';
import {getUser} from "../services/user api.service";
import {IUser} from "../models/IUser";


type UserProps = {
    item: IUser
}
const UserComponent:FC<UserProps> = ({item}) => {

    const [user,setUser] = useState<IUser[]>([]);
    const clickFullInfo = async () => {
        const user = await getUser(item.id);
        // @ts-ignore
        setUser(user);
    };
    return (
        <div>
            <button onClick={() => {
                clickFullInfo();
            }}>More Info</button>
            <div>
                {
                    user.map(value => <li key={value.id}></li>)
                }
            </div>
        </div>
    );
};

export default UserComponent;
