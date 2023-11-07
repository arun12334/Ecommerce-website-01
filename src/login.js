import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backgroundImg from './Asset/background.jpg'; // Import the background image
// import { Card, CardContent } from '@mui/material';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Check if the username and password are correct
        if (username === 'arun@gmail.com' && password === '7112') {
            toast.success('Login Successfully .', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000 // Close the toast after 3 seconds (adjust as needed)
            });

            // Redirect to the home page by navigating to the specified path
            // In this case, we use the `to` prop of the Link component to trigger navigation
        } else {
            // Show an error toast message
            toast.error('Invalid username or password.', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 1000 // Close the toast after 3 seconds (adjust as needed)
            });

        }
    };
    const isLoginDisabled = !username || !password;
    return (

 
                <div className="App" style={{
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover', // Adjust the background image size
            backgroundRepeat: 'no-repeat', // Prevent the background image from repeating
            width: '100vw', // Set the width of the background
            height: '100vh', // Set the height of the background
            display: 'flex', // Use flex to center the content vertically
            justifyContent: 'center', // Center content horizontally
            alignItems: 'center', // Center content vertically
        }}    >
            
          

            <div className='login_page'>
            <h1>Login Page</h1>
                <div className='user_name'>
                    <TextField
                        fullWidth
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div >
                <div className='user_name' >
                    <TextField
                        fullWidth
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='user_name' >
                    <Link to={username === 'arun@gmail.com' && password === '7112' ? '/home' : '#'}>
                        <Button type='button' fullWidth onClick={handleLogin} variant="contained" disabled={isLoginDisabled}>Login</Button>
                    </Link>
                    <div className='user_name' >
                    <Button   fullWidth color="error" variant="contained" >
                        Forgot Password
                    </Button>
                    </div>
                </div>
            </div>
        </div>
        
 
    );
};

export default Login;
