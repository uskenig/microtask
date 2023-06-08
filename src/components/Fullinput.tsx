import React, {ChangeEvent, useState} from 'react';
import {type} from "os";

type FullInputPropsType = {
    addMessage: (title: string) => void
}
const Fullinput = (props: FullInputPropsType) => {

    let [title, setTitle] = useState("")

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)

    }

    const  onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle("")
    }

    return (
        <div>
            {/*<input value={title} onChange={onChangeInputHandler}/>*/}
            {/*<button onClick={onClickButtonHandler}>+</button>*/}
        </div>
    );
};

export default Fullinput;