import React, { useState } from 'react';
import TableBookings from './TableBookings';


const movies = [
    {
      name: "Vadivasal",
      price: 120,
      occupied: [20, 21, 30, 1, 2, 8]
    },
    {
      name: "Valimai",
      price: 150,
      occupied: [9, 41, 35, 11, 65, 26]
    },
    {
      name: "Beast",
      price: 200,
      occupied: [37, 25, 44, 13, 2, 3]
    },
    {
      name: "Doctor",
      price: 100,
      occupied: [10, 12, 50, 33, 28, 47]
    },
    {
      name: "Ponniyin Selvan-The Beginning",
      price: 200,
      occupied: [7, 25, 4, 13, 20, 31]
    },
    {
      name: "Vikram",
      price: 180,
      occupied: [3, 5, 40, 3, 20, 21]
    }
  ];
  
 const ManageBookings = () => {
    
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
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
  )
}

export default ManageBookings;