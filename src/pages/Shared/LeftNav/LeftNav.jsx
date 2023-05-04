import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {

    const [categoris, setCategoris] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categoris')
            .then(res => res.json())
            .then(data => setCategoris(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>AllGategoris</h2>

               {
                categoris.map(categori=><p
                key={categori.id}>
                    <Link className='text-dacoretion-none' to={`/categor/${categori.id}`}>{categori.name}</Link>
                </p>)
               }
        </div>
    );
};

export default LeftNav;