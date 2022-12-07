import { React, useState } from 'react'
import { Login } from './Login';
import { Register } from './Register';


const App = () => {
  const [currentForm, setCurrentForm] = useState('Login');
  return (
    <div>
      {
        currentForm == "Login" ? <Login /> :
          <Register />
      }

    </div>
  )
}

export default App