import {useState} from 'react';
import './App.css';

const name = 'Алыдин';
const positions = ['рядовой', 'сержант', 'лейтенант', 'капитан', 'полковник', 'генерал'];
function App() {
    const [index, setIndex] = useState(0);
    const [message, setMessage] = useState('');
    const position = positions[index];
    const handleClick = () => {
        setMessage('Должность повышена');
        setIndex(index + 1);
    };

    return (
        <div className="person-info">
            <h2>Имя : {name}</h2>
            <p>Должность: {position}</p>
            <p>Компания: НКВД</p>
            <p>Возраст: 69</p>
            <p>Пол: Мужской</p>
            <p>Рост: 185</p>
            {message && <p>{message}</p>}
            <button onClick={handleClick}>Повысить в должности</button>
        </div>
    );
}

export default App;