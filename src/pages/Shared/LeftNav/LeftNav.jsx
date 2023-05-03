import React, { useEffect, useState } from 'react';

const LeftNav = () => {

    const [categoris, setCategoris] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categoris')
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>left nav</h2>
        </div>
    );
};

export default LeftNav;