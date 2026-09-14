    import React, { useState} from 'react'

function EventPractice() {
    const [message, setMessage] = useState("Hello!");

    function handleClick() {
        setMessage("You clicked the button!");
    }

    function handleChange(event) {
        setMessage(event.target.value);
    }


  return (
    <div>
      <h2>{message}</h2>

      <button onClick={handleClick}>
        Click Me
      </button>

      <br />

      <input type="text" placeholder="Type something..."
      onChange={handleChange}/>
    </div>
  );
}

export default EventPractice
