import React from 'react'
import  Link  from '@mui/material/Link';
import  Typography  from '@mui/material/Typography';

import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage = () => {

  return (
    <div>
        <h1>Login Page</h1>
        <LoginFormik></LoginFormik>
        <Typography variant="body2" color="GreyText" align="center">
            <Link color='inherit' href='/register'>
                Sign up
            </Link>
        </Typography>
    </div>
  );
}

export default LoginPage