import React from 'react';
import Button from '@mui/material/Button';
import CopyRight from '../../components/pure/copyRight';
import { useNavigate } from 'react-router-dom';

const DashBoardPage = () => {
    
    const navigate = useNavigate();
     
    const logout = () => {
        navigate('/login')
    }

    return (
        <div>
            <Button variant="contained" onClick={logout}>Hello World</Button>  
            <CopyRight></CopyRight>
        </div>
    );
}

export default DashBoardPage;
