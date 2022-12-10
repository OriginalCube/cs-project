import React from 'react'
import { useParams } from 'react-router-dom';
import Computers from './components/Computers';
import Account from './components/Account';

const Homepage = (props) => {
    const {id} = useParams();
    const [address, setAddress] = React.useState(1);
   
    React.useEffect(()=>{
        setAddress(parseInt(id));
    },[id])

    return (
    <div className='homePage'>
        {address<=3 && address>=1?<Computers id={address}/> : null}
        {address===4?<Account/> : null}
    </div>
  )
}

export default Homepage