// Example 1 — onClick
import ClickButton from "./components/ClickButton";
import React from 'react'
import GreetingButton from "./components/GreetingButton";
import EventButton from "./components/EventButton";
import InputBox from "./components/InputBox";
import LoginForm from "./components/LoginForm";
import KeyButton from "./components/KeyButton";
import Keyboard from "./components/Keyboard";
import EventPractice from "./components/EventPractice";

function App() {
  return (
    <div>
      <h1>React Events</h1>

      <button onClick={() => alert("Button clicked")}>
        Click Me
      </button>

      {/* Example 2 */}
      <ClickButton />

      {/* Example 3 */}
      <GreetingButton />

      {/* Example 4 */}
      <EventButton />

      {/* Example 5 */}
      <InputBox />

      {/* Example 6 */}
      <LoginForm />

      {/* Example 7 */}
      <KeyButton />

      {/* Example 8 */}
      <Keyboard />

      {/* Event Practice Project */}
      <EventPractice />
    </div>
  );
}

export default App
