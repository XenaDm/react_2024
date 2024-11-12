import React, {memo} from 'react';

type MenuTypes = {
    id: number;
    someFn: ()=>void
    links: string[];
}
const Menu =  memo(({id, someFn, links}: MenuTypes) => {

        console.log('menu build')
    return (
        <div>
            {
                links.map(link => (<li>{link}</li>))
            }
        </div>
    );
});

export default Menu;