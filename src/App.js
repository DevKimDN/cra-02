import "./App.css";
import ButtonChin from "./components/ButtonChin";
import Course from "./components/Course";
import Course2 from "./components/Course2";
import PostItem from "./components/PostItem";



function App() {
  return (
    <div className="App">
    <Course2 CourseName= "Reactjs" NumberStudent = "7" />
      <Course2 CourseName= "Nodejs" NumberStudent = "3" />   
     
    </div>
  );
}

export default App;
