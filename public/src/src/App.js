import './App.scss';
import { PostListPage } from './components/posts/postListPage/PostListPage';
import { UserListPage } from './components/users/userListPage/UserListPage';
import { UserDetailPage } from './components/users/userDetailPage/UserDetailPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import { CreatePostPage } from './components/posts/post/CreatePostPage';
import { CreateUserPage } from './components/users/CreateUserPage';


function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="posts/create" element={<CreatePostPage/>} />
        <Route path="posts" element={<PostListPage/>} />
        <Route path="users" element={<UserListPage/>} />
        <Route path="users/create" element={<CreateUserPage/>} />
        <Route path="users/:userId" element={<UserDetailPage/>} />
        </Routes>
        
    </div>
   </BrowserRouter>
   
  );
}

export default App;
