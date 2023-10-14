import React, { useState } from 'react'

import PostList from './components/PostList';
import MyButton from './components/UI/button/myButton';


import './css/app.css'
import MyInput from "./components/UI/input/myInput";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'JavaScript 2', body:'Description'},
    {id:3, title:'JavaScript 3', body:'Description'}
  ])

    const [title, setTitle] = useState('')
const addNewPost = (e) => {
      e.preventDefault()
      console.log(title)
}

  return (
    <div className="App">
        <form >
            <MyInput onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Названия поста'/>
            <MyInput placeholder='Описания поста'/>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
        <PostList posts = {posts} title={'Список постов 1'}/>

    </div>
  );
}

export default App;
