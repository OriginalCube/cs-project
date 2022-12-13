import React from 'react'
import Cart from './Cart';
import { useNavigate } from 'react-router-dom';

const Account = (props) => {
    let tot = 0;
    const [total, setTotal] = React.useState(0);
    const navigate = useNavigate();
    let userData = [];
    userData = JSON.parse(localStorage.getItem('user'));
    let cartData = [(JSON.parse(localStorage.getItem('cart')))]; 
    const removeItem = (e) =>{
        console.log(e)
        tot -= e;
        setTotal(tot);
    }

    const buyEvent = () =>{
        localStorage.removeItem('cart');
        navigate('/homepage/4')
    } 

    const logOut = () =>{
        localStorage.removeItem('auth');
        navigate('/')
    }
    React.useEffect(()=>{setTotal(tot)},[tot])
    return (
    <div className='accounts' style={{position:'absolute', top: '10%'}}>
        <div className='userDetails'> 
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Birthday: {userData.birthday}</p>
            <button onClick={logOut}>Log Out</button> 
        </div>
        <div className='cart'>
            {
                cartData[0]!==null?cartData[0].map((e,index)=>(
                    <Cart
                        removeItem={removeItem}
                        cartData={cartData}
                        image={e.image}
                        key={index} 
                        id={index}
                        name={e.name} 
                        price={e.price}
                    />
                )):null
            }
            {cartData[0]!==null?<p className='total'>Total Amount:₱<span style={{color: 'crimson',}}> {total} </span><br/>
            {cartData[0].map((e)=>{tot+=e.price; return null;})}{cartData[0]!==null?<button className='buyButton' onClick={buyEvent}>Buy Now</button>:null}</p>
            :null}
        </div>
    </div>
  )
}

export default Account