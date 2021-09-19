import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import TestUsers from './test-user.json'
import HeadBar from './HeadBar';
import MainPost from './MainPost';
import CommentSection from './CommentSection/CommentSection';
import { data } from 'jquery';

const initialUser = {
  userList: [],
  currentUser: null
}


function App() {

  const [users, setUser] = useState(initialUser);

  useEffect(()=>{

    (async () =>{
      const response  = await (await fetch("http://localhost:5000/api/comment/getuser"));
      const data = await response.json();

      if(response.status != 200){
        return;
      }
      setUser({
        ...users,
        userList: data,
        currentUser: data[0]
      });
    })();

  }, [])

  function changeCurrentUser(id){
    const newCurrentUser = users.userList.find(x => x.id === Number(id))
    setUser({
      ...users,
      currentUser: newCurrentUser
    })
  }

  return (
    <div>
      <HeadBar 
        users={users} 
        changeCurrentUser={changeCurrentUser}
        />
      <MainPost />
      <CommentSection users={users} />
    </div>
  )
}

export default App;
