import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, AppDispatch } from '../Store/Store';
import { append, remove } from '../Store/StringBuilder';

const StringBuilder: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const content = useSelector((state: AppState) => state.stringBuilder.content);

    return (
        <div>
            <h1>String Builder</h1>
            <h2>{content}</h2>
            <button onClick={() => dispatch(append('test'))}>Append</button>
            <button onClick={() => dispatch(remove({ from: 3, to: 7 }))}>Remove</button>
        </div>
    );
};

export default StringBuilder;
