import React from 'react'
import './Calendar.css'

export default function Сalendar() {

  const booking_week = [

    { day: 'Mn', time: 8, booked: false },
    { day: 'Mn', time: 9, booked: false },
    { day: 'Mn', time: 10, booked: false },
    { day: 'Mn', time: 11, booked: false },
    { day: 'Mn', time: 12, booked: false },
    { day: 'Mn', time: 13, booked: false },
    { day: 'Mn', time: 14, booked: false },

    { day: 'Tu', time: 8, booked: false },
    { day: 'Tu', time: 9, booked: false },
    { day: 'Tu', time: 10, booked: false },
    { day: 'Tu', time: 11, booked: false },
    { day: 'Tu', time: 12, booked: false },
    { day: 'Tu', time: 13, booked: false },
    { day: 'Tu', time: 14, booked: false },
  ];

  const [week, setWeek] = React.useState(booking_week);
  const [selectedTime, setSelectedTime] = React.useState('');
  const handleUnbooking = (timeToUnbook) => {
    setWeek((currentWeek) =>
      currentWeek.map((slot) =>
        `${slot.day}-${slot.time}` === timeToUnbook ? { ...slot, booked: false }
          : slot
      )
    );
  };

  const handleBooking = () => {
    if (!selectedTime) return

    setWeek(week.map((slot) => `${slot.day}-${slot.time}` === selectedTime ? { ...slot, booked: true } : slot
    ))
  }




  return (
    <div className="calendar">
      <h1 className="calendar-title">Meeting-Calendar</h1>

      {week.map(({ day, time, booked }) => (
        <div className="slot-row" key={`${day}-${time}`}>
          {day} {time} {booked ? 'Booked' : 'Available'}
        </div>
      ))}
      <select
        className="booking-select"
        value={selectedTime}
        onChange={(event) => setSelectedTime(event.target.value)}>

        {week.map(({ day, time, booked }) => {
          if (!booked) {
            return (
              <option key={`${day}-${time}`} value={`${day}-${time}`}>
                {day} {time}:00
              </option>
            )
          }
          return null
        })}
      </select>
      <button className="booking-button" onClick={handleBooking}>Забронювати</button>
      <table className="bookings-table">
        <thead>
          <tr>
            <th>День</th>
            <th>Час</th>
            <th>Дія</th>
          </tr>
        </thead>
        <tbody>
          {week
            .filter((slot) => slot.booked)
            .map(({ day, time }) => (
              <tr key={`${day}-${time}`}>
                <td>{day}</td>
                <td>{time}:00</td>
                <td>
                  <button className="unbook-button" onClick={() => handleUnbooking(`${day}-${time}`)}>
                    Розбронювати завчасно
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}
