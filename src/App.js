import logo from './logo.svg';
import './App.css';
import Main from './Student1/Main';
//import NotFound from '.NotFound';
import Router1 from '../src/Task4/Router1';

function App() {
  return (
    <div className="App">

       
          {/* <Route path='/students' element={<Main />}></Route>
          <Route path='/students/:stdid' element={<Studentdetails />}></Route>
          <Route path='/student/:stdid' element={<Studentdetails />}></Route>
          <Route path='/header' element={<Header />}></Route>  */}
           {/* <Route path='/*' element={<Header1 />}></Route> 
             */}
{/* 
              <Route path="/" element={<Studentdetails />} />
        <Route path="/Students" element={<Studentdetails />} />
        <Route path="/Student/:stdid" element={<Student />} />
        <Route path="Students/:stdid" element={<Student />} />
        <Route path="/task" element={<Main />} />
        <Route path="/*" element={<NotFound />} /> */}

<Router1 />
    </div>
  );
}

export default App;
