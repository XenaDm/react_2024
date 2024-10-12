import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/users";

const App: FC = () => {
    return (
        <>
            <Character name={'Bart'}
            image={"https://static.simpsonswiki.com/images/thumb/6/65/Bart_Simpson.png/300px-Bart_Simpson.png"}
        />

    <Character name={'Homer'}
    image={"https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png"}
    />
    <Character name={'Marge'}
    image={"https://upload.wikimedia.org/wikipedia/uk/0/0b/Marge_Simpson.png"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, cum dicta dolor dolore doloremque exercitationem minus necessitatibus nostrum numquam officia officiis reiciendis repellendus repudiandae similique sit tempore ut veritatis voluptatibus?
    </Character>
            <hr/>
            <Users/>
</>
);
}


export default App;
