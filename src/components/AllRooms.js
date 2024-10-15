import React from 'react';
import '../styles/AllRooms.css';

const AllRooms = () => {
    const rooms = [
        { number: 1, rent: '', status: '' },
        { number: 2, rent: '', status: '' },
        { number: 3, rent: '', status: '' },
        { number: 4, rent: '', status: '' },
        { number: 5, rent: '', status: '' },
        { number: 6, rent: '', status: '' },
        { number: 7, rent: '', status: '' },
        { number: 8, rent: '', status: '' },
        { number: 9, rent: '', status: '' },
        { number: 10, rent: '', status: '' },
        // Add more room data here
    ];

    return (
        <div className="room-list">
            <h2 className='room-head'>Room List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Room No.</th>
                        <th>Rent</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.number}>
                            <td>{room.number}</td>
                            <td>{room.rent}</td>
                            <td>{room.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllRooms;