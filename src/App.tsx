import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Fullinput from "./components/Fullinput";
import Input from "./components/Input";
import Button from "./components/Button";
import InputNew from "./components/InputNew";

function App() {
  let [message, setMessage] = useState([
      {message: "message1"},
      {message: "message2"},
      {message: "message3"}
  ])

  let [title, setTitle] = useState("")
    const addMessage = (title:string) => {
        let newMessage = {message: title}
        setMessage(   [...message, newMessage])
  }

  const callBackButtonHandler = () => {
      addMessage(title)
      setTitle('')
  }

    return (
    <div className="App">
        {/*<div>
            <input/>
            <button>+   </button>
        </div>*/}
        {/*<Fullinput addMessage={addMessage}/>*/}
        <InputNew title={title} setTitle={setTitle}/>
        <Button name={'+'} callBack={callBackButtonHandler}/>
        {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
        })}
    </div>
  );
}

export default App;
