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
    ];

    return (
        <div className="room-list">
            <h2 className="room-head">Room List</h2>
            <table className="room-table">
                <thead>
                    <tr>
                        <th className="table-header">Room No.</th>
                        <th className="table-header">Rent</th>
                        <th className="table-header">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.number} className="table-row">
                            <td className="table-data">{room.number}</td>
                            <td className="table-data">{room.rent}</td>
                            <td className="table-data">{room.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllRooms;