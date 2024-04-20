"use client";

import * as React from 'react';

const Counter = () => {
    const [count, setCount] = React.useState([]);

    const onIncrement = () => {
        setCount((prev) => ([...prev, prev.length + 1]));
    };

    const onDecrement = () => {
        setCount((prev) => {
            const newList = [...prev];
            newList.pop();
            return newList;
        });
    };

    return (
        <div data-testid="counter" style={{ marginTop: '20px', padding: '5px', width: '350px', border: '2px solid grey' }}>
            {
                count.map((num, index) => (
                    <div data-testid="counter-number" key={`counter-${num}-${index + 1}`} style={{ color: 'red' }}>{num}</div>
                ))
            }
            <div style={{ paddingTop: '20px', display: 'flex', justifyContent: 'end' }}>
                <button data-testid="decrement-btn" style={{ marginRight: '10px' }} onClick={onDecrement}>Decrement</button>
                <button data-testid="increment-btn" onClick={onIncrement}>Increment</button>
            </div>
        </div>
    );
};

export default Counter;
