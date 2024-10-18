import React,{useState} from 'react';
import './AllRooms.css';

const AllRooms = () => {
    const [location, setLocation] = useState('Dantewada');

    const roomsByLocation = {
        Dantewada: [
            { number: 1, rent: '', status: '' },
            { number: 2, rent: '', status: '' },
            { number: 3, rent: '', status: '' },
            { number: 4, rent: '', status: '' },
            { number: 5, rent: '', status: '' },
            { number: 6, rent: '', status: '' },
        ],
        Barsur: [
            { number: 1, rent: '', status: '' },
            { number: 2, rent: '', status: '' },
        ],
        Geedam: [
            { number: 1, rent: '', status: '' },
            { number: 2, rent: '', status: '' },
        ],
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const rooms = roomsByLocation[location];

    return (
        <div className="room-list">
            <h2 className='room-head'>Room List</h2>
            <label htmlFor="location-select">Select Location:</label>
            <select id="location-select" value={location} onChange={handleLocationChange}>
                <option value="Dantewada">Dantewada</option>
                <option value="Barsur">Barsur</option>
                <option value="Geedam">Geedam</option>
            </select>
            <table className="room-table">
                <thead>
                    <tr>
                        <th className="AllRooms-table-header">Room No.</th>
                        <th className="AllRooms-table-header">Rent</th>
                        <th className="AllRooms-table-header">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.number} className="table-row">
                            <td className="AllRooms-table-data">{room.number}</td>
                            <td className="AllRooms-table-data">{room.rent}</td>
                            <td className="AllRooms-table-data">{room.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllRooms;