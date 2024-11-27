import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, AppDispatch } from '../Store/Store';
import { increment, decrement, incrementByAmount } from '../Store/Counter';

const Counter: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const count = useSelector((state: AppState) => state.counter.value);

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
        </div>
    );
};

export default Counter;
