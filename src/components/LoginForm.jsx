import React from "react";

function LoginForm() {

function handleSubmit(event) {
    event.preventDefault();

    alert("Form submitted!");
}

return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <br />

        <input type="text" placeholder="Password" />
        <br />

        <button type="submit">Login</button>
    </form>
 );
}

export default LoginForm;