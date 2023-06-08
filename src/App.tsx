import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Fullinput from "./components/Fullinput";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  let [message, setMessage] = useState([
      {message: "message1"},
      {message: "message2"},
      {message: "message3"}
  ])

  let [title, setTitle] = useState("")
    const addMessage = (title:string) => {
      let newMessage = {message: title};
      setMessage([newMessage, ...message])

  }

    return (
    <div className="App">
        {/*<div>
            <input/>
            <button>+   </button>
        </div>*/}
        {/*<Fullinput addMessage={addMessage}/>*/}
        <Input setTitle={setTitle} title={title} />
        <Button name={"+"} callBack={() => {}}/>
        {message.map((el, index) => {
            return (
                <div key={index}>{el.message}</div>
            )
        })}
    </div>
  );
}

export default App;
