import React, {Component} from 'react';

type PropsType ={}
type StateType ={
    users: any[];
    posts: string[];
    comments: string[];
}
class App extends Component<PropsType, StateType> {

    constructor(props: any) {
        super(props);
        this.state ={users: [], posts: [], comments: []}
    }

componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                this.setState({users: value})
            })
}

    render() {
        return (
            <div>
                {
                    this.state.users.map(user => (<div>{user.name}</div>))
                }
            </div>
        );
    }
}

export default App;