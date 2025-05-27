import React from 'react';
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/fonts.min.css'
import '../src/assets/css/kaiadmin.min.css'
import '../src/assets/css/plugins.min.css'
import { LineChart } from '@mui/x-charts';
import Home from './pages/Home';
import Form from './pages/Form';
import Table from './pages/Table';
import Aside from './components/Aside';
import { BrowserRouter, Route, Routes ,Navigate } from 'react-router-dom';



const App = () => {
  
  return (
    <>
    <BrowserRouter>
      <Aside/>
       <Routes>

        <Route path="/" element={<Navigate to="/Home" replace />}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path="/Form" element={<Form/>}></Route>
        <Route path="/Table" element={<Table/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
