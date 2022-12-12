import React from 'react'
import Register from './components/Register'
import Login from './components/Login';
import { Routes, Route,useNavigate } from "react-router-dom";
import Homepage from './Homepage';
import Product from './components/Product';

//  "proxy": "http://localhost:8080", for backend
const Main = () => {
  const [navigation, setNavigation] = React.useState();
  let tempCart = [];
  const navigate = useNavigate();
  const authKey = localStorage.getItem('auth');
  const changeAddress = (e) =>{//Changes homepage on navBar
    navigate(`/homepage/${e}`)
  }

  const auth = (e) =>{
    if(e===true){ 
    navigate('/homepage/0')
    setNavigation(e);
    }else{
      setNavigation(e);
    }
  }

  const addCart = (e) =>{
    const itemData = e.itemData;
    if(localStorage.getItem('cart')!==null){
      tempCart = JSON.parse(localStorage.getItem('cart'));
    }
    console.log(localStorage.getItem('cart'))
    tempCart.push(itemData);
    localStorage.setItem('cart', JSON.stringify(tempCart));
  }

  React.useEffect(()=>{
    if(authKey==='true'){
      if(navigation===false){
        navigate('/homepage/0');
        console.log(authKey + ' @' + navigation)
      }
      setNavigation(true);
    }else{
      setNavigation(false);
    }
  },[])
  return (
    <>
      <Routes>
            <Route path="/homepage/:id" element={<Homepage />}/>
            <Route path="/login" element={<Login auth={auth} />}/>
            <Route path="/" element={<Register  auth={auth}/>}/>
            <Route path="/product/:id/:type" element={<Product addCart={addCart}/>}/>
      </Routes> 
      {navigation?<div className='navigation'>
        <div className='navigation-item'> 
          <p onClick={()=>changeAddress(0)}>Home</p> 
          <p onClick={()=>changeAddress(1)}>Computers</p> 
          <p onClick={()=>changeAddress(2)}>Laptops</p> 
          <p onClick={()=>changeAddress(3)}>Accessories</p> 
          <p onClick={()=>changeAddress(4)}>Account</p> 
        </div>
      </div>:null}
    </>

  )
}

export default Main