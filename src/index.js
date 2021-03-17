import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function LoginForm(props) {
  const nameEl = React.useRef(null);
  const passwordEl = React.useRef(null);
  const [currentRememberMe, setRememberMe] = useState('false');
  const rememberMeEl = React.useRef(null);
  const [submittedFormValue, setFormValues] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setFormValues(<form>
      <p>User Name: {nameEl.current.value}</p>
      <p>Password: {passwordEl.current.value}</p>
      <p>Remember Me: {currentRememberMe}</p>
    </form>);
  };

  return (
     <form onSubmit={handleSubmit}>
       <p>User Name: <input type="text" placeholder="username" ref={nameEl} /></p>
       <p>Password: <input type="password" placeholder="password" ref={passwordEl}/></p>
       <label>
         <input type="checkbox" ref={rememberMeEl} onChange={()=> setRememberMe('true')}/>
         Remember me
       </label>
       <p><button type="submit" className="myButton">Login</button></p>
       {submittedFormValue}
     </form>
   );
}

ReactDOM.render(<div><LoginForm /></div>, document.getElementById("root"));