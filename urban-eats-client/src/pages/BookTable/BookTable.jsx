import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TableBookings from './TableBookings';

const bookedInfo = [
    {
      occupied: [20, 21, 30, 1, 2, 8]
    },
  ];

const BookTable = () => {
    const [selectedMovie, setSelectedMovie] = useState(bookedInfo[0]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [occupiedSeats, setOccupiedSeats] = useState([]);

    useEffect(() => {
      // Fetch the bookings data from your API
      axios.get('http://localhost:5000/bookings')
        .then((response) => {
          const occupied = response.data.flatMap(booking => booking.bookedTable);
          setOccupiedSeats(occupied);
        })
        .catch((error) => {
          console.error('Error fetching bookings:', error);
        });
    }, []);
    return (
      <>
        <TableBookings
          movie={selectedMovie}
          selectedSeats={selectedSeats}
          onSelectedSeatsChange={(selectedSeats) =>
            setSelectedSeats(selectedSeats)
          }
        />
      </>
    );
}

export default BookTable