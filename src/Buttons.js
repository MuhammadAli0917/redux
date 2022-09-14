import React from 'react';
import {useDispatch} from "react-redux";
import {minus, plus} from "./redux/Counter";

function Buttons(props) {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(plus())}>Inc +</button>
            <button onClick={() => dispatch(minus())}>Dec -</button>
        </div>
    );
}

export default Buttons;