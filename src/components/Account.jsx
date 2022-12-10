import React from 'react'
import Cart from './Cart';

const Account = (props) => {
    const [total, setTotal] = React.useState(0);
    let userData = []
    let cartData = []
    let price = 0;

    try{
        userData = JSON.parse(localStorage.getItem('user'));
        cartData = JSON.parse(localStorage.getItem('cart')); 
        console.log(cartData)
    }catch(e){
    }
    return (
    <div className='accounts' style={{position:'absolute', top: '10%'}}>
        <div className='userDetails'> 
            <p>Name: {userData.username}</p>
            <p>Email: {userData.email}</p>
            <p>Birthday: {userData.birthday}</p>
        </div>
        <div className='cart'>
            {
                cartData.map((e,index)=>(
                    <Cart 
                        cartData={cartData}
                        key={index} 
                        id={index}
                        name={e.name} 
                        price={e.price}
                    />
                ))
            } 
        </div>
        <p>Total:{total}</p>
    </div>
  )
}

export default Account