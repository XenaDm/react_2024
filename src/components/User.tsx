import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../models/IUser";
import {userService} from "../services/user api.service";

type UserProps = {
    item: IUser
};
const User: FC<UserProps> = ({item}) => {

    const [user,setUser] = useState();

    const clickGetFullInfoOfThisUser = async () => {
       const user = await userService(item.id);
setUser(user);
    };

    return (
        <div>
                <button onClick={() =>{
                    clickGetFullInfoOfThisUser();
                } }>Full info</button>
            <div>
                {
                   <ul key={item.id}>
                        <li>Username: {item.username}</li>
                        <li>E-mail: {item.email}</li>
                        <li>Phone: {item.phone}</li>
                        <li>Website: {item.website}</li>
                    </ul>
                }

            </div>


        </div>
    );
};

export default User;