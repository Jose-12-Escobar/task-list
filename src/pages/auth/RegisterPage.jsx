import React from 'react'
import  Link  from '@mui/material/Link';
import  Typography  from '@mui/material/Typography';
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage = () => {
  return (
    <div>
        <h1>Register Page</h1>
        <RegisterFormik></RegisterFormik>
        <Typography variant="body2" color="GreyText" align="center">
            <Link color='inherit' href='/login'>
                Log in
            </Link>
        </Typography>
    </div>
  );
}

export default RegisterPage