import React, {useState, useEffect} from 'react';

function App() {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost');
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
    }, []);

    const filteredData = data.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            {/* ... */}
            <ul>
                {filteredData.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;