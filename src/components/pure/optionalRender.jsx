import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Estilos para usuarios logueados
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight: 'bold' 
};

// ? Estilos para usuarios no logueados
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight: 'bold'
};


//Login / Logout buttons
const LoginButton = ({ loginAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({ logoutAction, propStyle }) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    )
}


const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    /*const updateAccess = () => {
        setAccess(!access);
    }*/

    const loginAction = () => {
        setAccess(true);
    }

    const logoutAction = () => {
        setAccess(false);
    }

    let optionalButton;

    if (access) {
        optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
        optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    // Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1);
    }

    return (
        <div>
            {/* Optional Button */}
            {optionalButton}
            {/* N Messages unread */}
            {/* Ternay Operator */}
            {access ? (
                <div> 
                    { nMessages > 0 ?
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> :
                    <p>There are no new messages</p>
                    }
                    <button onClick={addMessages}>Add new Message</button>
                </div>) : null}    
            
        </div>

    );
}

export default OptionalRender;
