import React from 'react'
import Cart from './Cart';

const Account = (props) => {
    let userData = []
    userData = JSON.parse(localStorage.getItem('user'));
    let cartData = [(JSON.parse(localStorage.getItem('cart')))]; 
    console.log(cartData)
    return (
    <div className='accounts' style={{position:'absolute', top: '10%'}}>
        <div className='userDetails'> 
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Birthday: {userData.birthday}</p>
        </div>
        <div className='cart'>
            {
                cartData[0]!==null?cartData[0].map((e,index)=>(
                    <Cart 
                        cartData={cartData}
                        key={index} 
                        id={index}
                        name={e.name} 
                        price={e.price}
                    />
                )):null
            } 
        </div>
    </div>
  )
}

export default Account