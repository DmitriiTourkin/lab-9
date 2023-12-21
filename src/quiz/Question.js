import {useState} from "react";

export default function Question(props) {
    const [userAnswer, setUserAnswer] = useState(0);

    return (
        <>
            <h1>Вопрос №{props.data.id+1}</h1>
            <h4>{props.data.questionText}</h4>
            <select>
                {props.data.optionToAnswer.map(oneOption =>  <option id={oneOption.id}>{oneOption.optionText}</option>)}
            </select>

        </>
    )
}