import React from 'react'

function Keyboard() {

    function handleKeyDown(event) {
        console.log(event.key);
    }

  return (
    <input type="text" 
    placeholder="Press a key..."
    onKeyDown={handleKeyDown}
    />
  );
}

export default Keyboard;

