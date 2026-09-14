import React from 'react'

function ClickButton() {
function handleClick() {
    alert("Hello Lokesh!");
}
  return (
    <button onClick={handleClick}>
        Click Me
    </button>
  );
}

export default ClickButton
