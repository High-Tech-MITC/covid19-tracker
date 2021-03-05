import React from 'react';
import './Table.css'

const Table = ({ countries }) => {
    return (
        <div className="table">
            {console.log(countries[0])}
            {countries.map(({ country, cases }) => (
                <tr>
                    <td>{country}</td>
                    <td>{cases}</td>
                </tr>
            ))}
        </div>
    );
}

export default Table;
