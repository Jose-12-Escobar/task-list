import React from 'react';

import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const getIcon = (icon) => {
    switch (icon) {
        case 'HOME':
            return (<Home/>)
        case 'TASKS':
            return (<Home/>)
        case 'SETTINGS':
            return (<Settings/>)
        default:
            break;
    }
}

const MenuListItems = ({list}) => {

    const navigate = useNavigate;
    
    const nav = (path) =>{
        navigate(path);
    }

    return (
        <List>
            {list.map(({text, path, icon}, index) =>
            (
                <ListItem key={index} button onClick={() => nav(path)}>
                    <ListItemIcon>
                        {getIcon(icon)}
                    </ListItemIcon>
                    <ListItemText
                        primary={text}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default MenuListItems;


