import { useState } from 'react';
import './App.css';

const name = 'Алыдин';

function App() {
    const [message, setMessage] = useState('');

    const handleClick = () => {
        setMessage('Привет, мир!');
    };

    return (
        <div className="person-info">
            <h2>Имя : {name}</h2>
            <p>Должность: рядовой</p>
            <p>Компания: НКВД</p>
            <p>Возраст: 69</p>
            <p>Пол: ламинат</p>
            <p>Рост: 185</p>
            {message && <p>{message}</p>}
            <button onClick={handleClick}>Кнопка</button>
        </div>
    );
}

export default App;