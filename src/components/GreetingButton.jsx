import React from 'react'

function GreetingButton() {
  function sayHello(name) {
    alert("Hello " + name);
  }

  return (
    <button onClick={() => sayHello("Lokesh")}>
        Say Hello
    </button>
  )
}

export default GreetingButton;
