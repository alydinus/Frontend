import React, { useState, useEffect } from 'react';

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
}
export default App;