import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const rememberMeEl = React.useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = {
      username: nameEl.current.value,
      password: passwordEl.current.value,
      rememberMe: rememberMeEl.current.checked,
    }
    console.log(formData);
  };

  return (
     <form onSubmit={handleSubmit}>
       <p>User Name: <input type="text" placeholder="username" ref={nameEl} /></p>
       <p>Password: <input type="password" placeholder="password" ref={passwordEl}/></p>
       <label>
         <input type="checkbox" ref={rememberMeEl} />
         Remember me
       </label>
       <p><button type="submit" className="myButton">Login</button></p>
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root"));