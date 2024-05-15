import clsx from "clsx";
import React from "react";
import './style.css';

const seats = Array.from({ length: 5 * 6 }, (_, i) => i);

const TableBookings = ({ movie, selectedSeats, onSelectedSeatsChange }) => {
  const handleSelectedState = (seat) => {
    console.log(seat+1)
    const isSelected = selectedSeats.includes(seat);
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter((selectedSeat) => selectedSeat !== seat)
      );
    } else {
      onSelectedSeatsChange([...selectedSeats, seat]);
    }
  };

  return (
    <div className="Cinema">
      <div className="screen" />
      Choose your table...

      <div className="seats">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat);
          const isOccupied = movie.occupied.includes(seat);
          return (
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                "seat",
                isSelected && "selected",
                isOccupied && "occupied"
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyUp={
                isOccupied
                  ? null
                  : (e) => {
                      if (e.key === "Enter") {
                        handleSelectedState(seat);
                      }
                    }
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default TableBookings;
