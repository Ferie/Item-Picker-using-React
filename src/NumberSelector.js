import React from "react";
import { useState } from "react";
import "./style.scss";

export default function NumberSelector(props) {
    const [number, setNumber] = useState(props.initialValue);

    return (
        <div className="number-selector">
            <label className="number-selector__item-name" htmlFor={props.id}>
                {props.itemName}
            </label>
            <button
                className="number-selector__icon number-selector__icon--minus"
                disabled={(number === props.minValue) ? true : false}
                onClick={() => setNumber(number - 1)}
            ></button>
            <input
                type="tel"
                name="item-counter"
                className="number-selector__value"
                id={props.id}
                value={number}
                onChange={(e) => e.target.value = number}
            />
            <button
                className="number-selector__icon number-selector__icon--plus"
                disabled={(number === props.maxValue) ? true : false}
                onClick={() => setNumber(number + 1)}
            ></button>
        </div>
    );
}
