import React, { useState } from 'react'

import PostList from './components/PostList';
import MyButton from './components/UI/button/myButton';


import './css/app.css'
import MyInput from "./components/UI/input/myInput";
import PostForm from "./components/PostForm";

function App() {

  const [posts, setPosts] = useState([
    {id:1, title:'JavaScript', body:'Description'},
    {id:2, title:'JavaScript 2', body:'Description'},
    {id:3, title:'JavaScript 3', body:'Description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = () => {

  }

      return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts = {posts} title={'Список постов 1'}/>
        </div>
      );
    }



export default App;
