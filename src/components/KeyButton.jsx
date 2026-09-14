    import React from 'react'
    
    function KeyButton() {

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
    
    export default KeyButton
    