
import './App.css';
import Users from "./components/users/Users";
import {postService} from "./services/dummyjson api.services";
import {IPost} from "./models/IPost";
import Posts from "./components/posts/Posts";
import {useState} from "react";

function App() {
const [posts, setPosts] = useState<IPost[]>([]);
    const lift = async (id:number) => {
setPosts(await postService.getPostsOfUser(id));
};

  return (
      <>
        <Users lift={lift}/>
          <hr/>
          <Posts posts={posts}/>
          <hr/>
      </>
  );
}


export default App;
