import React, { useState } from 'react';

let intervalID;


// Componente principal
const ElementRectangle = () => {
    
    const [color, setColor] = useState('rgb(0,0,0)');
    const [message, setMessage] = useState('Cuadrado negro');

    // Styles rectangle
    const rectangle = {
        width: '255px',
        height: '255px',
        color: 'white',
        backgroundColor: `${color}`
    }

    function changeColor() {
        //Color random
        intervalID = setInterval(() => {
            let red = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let green = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            let blue = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
            setColor(`rgb(${red},${green},${blue})`);
        }, 500);
        setMessage('Cambio de color mientras el raton este dentro del cuadrado');
    }

    function stopChangeOutside() {
        clearInterval(intervalID);
        setMessage('Detenido el cambio de color al salir el raton del cuadrado');
    }

    function stopChangeWithin() {
        clearInterval(intervalID);
        setMessage('Detenido el cambio de color al hacer doble click');
    }



    return (
        <div>
            <div style={rectangle} onMouseEnter={changeColor} onMouseLeave={stopChangeOutside} onDoubleClick={stopChangeWithin}>{message}</div>
        </div>
    );
}

export default ElementRectangle;
