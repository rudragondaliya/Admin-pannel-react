import React, { useEffect, useRef, useState } from 'react';
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

  const [product,setProduct] = useState({});
  const [productdata,setProductData] = useState([]);
  const [godown,setGodown] = useState([]);
  const [editId,setEditId] = useState(null)
  const [error,setError] = useState({})
  const imageRef = useRef();


  useEffect(()=>{
    let save = JSON.parse(localStorage.getItem("productdata")) || []
    setProductData(save)
  },[])     



  const handleChange=(e)=>{
    let {name,value,checked,files} = e.target; 

    if(name === 'godown'){
      let newGodown = [...godown]
      if(checked){
        newGodown.push(value)
      }
      else
      {
        newGodown = newGodown.filter((val)=> val !==  val)
      }
       setGodown(newGodown)
        setProduct({...product,godown:newGodown})
        return
    }

      if(files){
      const file = files[0]
      let reader = new FileReader();
      reader.onloadend=()=>{
        let fileData = {
          name : file.name,
          type : file.type,
          url : reader.result
        }
         setProduct({...product,[name]:fileData})
      }
        reader.readAsDataURL(file)
        return;
    }
    else
    {
       setProduct({...product,[name]:value})
      console.log(product);
    }
    
  }
   
console.log(product);

const validation=()=>{
  let errors = {};
  if(!product.product_name) errors.product_name = "product Name is required"
  if(!product.price) errors.price = "product Price is required"
  if(!product.stock) errors.stock = "product Stock is required"
  if(!product.image) errors.image = "product Image is required"
  if(!product.comment) errors.comment = "product Description is required"
  if(!product.godown) errors.godown = "Select a Warehouse"
  setError(errors)
  return Object.keys(errors).length === 0;
}

  const handleSubmit=(e)=>{
    e.preventDefault();
 
    if(!validation()) return;

  if(editId === null){
    
    const newdata = [...productdata,{...product,id:Date.now()}]
    setProductData(newdata)
    localStorage.setItem("productdata",JSON.stringify(newdata))
  }
  else{
    const updateProduct = productdata.map((val)=> val.id === editId ? product : val)
    localStorage.setItem("productdata",JSON.stringify(updateProduct))
    setProductData(updateProduct)
    setEditId(null)
  }

    setProduct({})
    setGodown([])
    imageRef.current.value = '';

  }

  const handleDelete=(id)=>{
    const deleteData = productdata.filter((val)=> val.id != id)
    localStorage.setItem("productdata",JSON.stringify(deleteData))
    setProductData(deleteData)
  }

  const handleEdit=(id)=>{
    const EditData = productdata.find((val)=> val.id === id)
    setProduct(EditData)
    setEditId(id)
    setGodown(EditData.godown || [])
  }
  
  return (
    <>
    <BrowserRouter>
      <Aside/>
       <Routes>

        <Route path="/" element={<Navigate to="/Home" replace />}></Route>
        <Route path='/Home' element={<Home 
        productdata={productdata}
         />}></Route>
        <Route path="/Form" element={<Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          product={product}
          godown={godown}
          editId={editId}
          error={error}
          imageRef={imageRef}
        />}></Route>
        <Route path="/Table" element={<Table
         productdata={productdata}
         handleDelete={handleDelete}
         handleEdit={handleEdit}
        />}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
