import React, { useState } from 'react';

const EggCounter: React.FC = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div>
            <h1>Egg Counter</h1>
            <p>Count: {count}</p>
            <button onClick={increment}>Add Egg</button>
            <button onClick={decrement}>Remove Egg</button>
        </div>
    );
};

export default EggCounter;