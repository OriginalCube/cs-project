import React from 'react'
import FormInputs from './FormInputs';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Login = (props) => {
    const [value, setValue] = React.useState({
        username: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            label: "Username",
            placeholder: "Username",
            type: "text",
            required: true
        }, 
        {
            id: 2,
            name: "password",
            label: "Password",
            placeholder: "Password",
            type: "password",
            required: true
        },
    ]

    //Account Checker
    const handleSubmit = (e) => {
        e.preventDefault();
        const accountChecker = JSON.parse(localStorage.getItem('user'));
        if((accountChecker.username === value.username && accountChecker.password === value.password)){
            localStorage.setItem('auth', true);
            props.auth(true);
        }
        else{
            alert('No Email found!');
        }
    };

    const onChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
    }; 

    React.useEffect(()=>{
        const auth = localStorage.getItem('auth');
        if(auth==='true'){
            props.auth(true);
        }
    },[])

    return (
    <div className='register'>
        <div className='registerWrapper'>
        <form onSubmit={handleSubmit}>
            <p className='registerText'>Login Page</p>
            {inputs.map((input) => (
            <FormInputs
                key={input.id}
                {...input}
                value={value[input.name]}
                onChange={onChange}
            />
            ))}
            <p>If you don't have an account please <Link to='/'>register.</Link></p>
            <Outlet />
            <button>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default Login