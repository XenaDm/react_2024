import {FC} from "react";
import IUser from "../../model/IUser";

type IUserProps = { user: IUser; lift:(user:IUser)=>void}
const User: FC<IUserProps> = ({user,lift}) =>{
    return(
        <div key={user.id}>{user.name}<button onClick={()=>{
            lift(user);
        }}>choose
        </button>
        </div>
    )
}
export default User;