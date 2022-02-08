import './App.scss';
import { PostListPage } from './components/posts/postListPage/PostListPage';
import { UserListPage } from './components/users/userListPage/UserListPage';
import { UserDetailPage } from './components/users/userDetailPage/UserDetailPage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Navbar } from './components/navbar/Navbar';
import {UserList} from './components/users/userList/UserList';

function App() {
  return (
   <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Routes>
        <Route path="posts" element={<PostListPage/>} />
        <Route path="users" element={<UserListPage/>} />
        <Route path="users/:userId" element={<UserDetailPage/>} />
        <Route path="users?page=:pageNumber" element={<UserListPage/>} />
        </Routes>
        
    </div>
   </BrowserRouter>
   
  );
}

export default App;
