import './App.css';
import StudentView from './features/student/StudentView';
import StudentBookView from './features/studentBook/StudentBookView';
import StudentBookPage from './features/studentBook/StudentBookPage';
import StudentPage from './features/student/StudentPage';

function App() {
    return (
      <div className="App">
        <StudentPage view={StudentView}/>
        <StudentBookPage view={StudentBookView}/>
      </div>
    )
}

export default App;
