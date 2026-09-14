import React from 'react'

function EventButton() {

    function handleClicked(event) {
        console.log(event.target);
        alert("You clicked the button!");
    }   

  return (
    <button onClick={handleClicked}>
        Click Me
    </button>
  );
}

export default EventButton;
