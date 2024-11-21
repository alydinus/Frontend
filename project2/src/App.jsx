import './App.css';
const name = 'Алыдин';
function App() {

    return (
        <div className="person-info">
            <h2>Имя : {name}</h2>
            <p>Должность: рядовой</p>
            <p>Компания: НКВД</p>
            <p>Возраст: 69</p>
            <p>Пол: ламинат</p>
            <p>Рост: 185</p>
        </div>
    );
}



export default App;