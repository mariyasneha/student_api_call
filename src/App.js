import logo from './logo.svg';
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAllStudents from './components/ViewAllStudents';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <AddStudent/> }/>
      <Route path="/search" element={ <SearchStudent/> }/>
      <Route path="/delete" element={ <DeleteStudent/> }/>
      <Route path="/viewall" element={ <ViewAllStudents/> }/>
      <Route path="/login" element={ <Loginpage/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
