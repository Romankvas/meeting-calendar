import React from 'react'
export default function Сalendar() {
  
  const booking_week = [

  { day: 'Mn',time: 8,booked: false},
  { day: 'Mn',time: 9,booked: true},
  { day: 'Mn',time: 10,booked: false},
  { day: 'Mn',time: 11,booked: false},
  { day: 'Mn',time: 12,booked: false},
  { day: 'Mn',time: 13,booked: false},
  { day: 'Mn',time: 14,booked: false},

{day: 'Tu',time: 8,booked: false},
{day: 'Tu',time: 9,booked: false},
{day: 'Tu',time: 10,booked: true},
{day: 'Tu',time: 11,booked: false},
{day: 'Tu',time: 12,booked: false},
{day: 'Tu',time: 13,booked: false},
{day: 'Tu',time: 14,booked: false},
];

const [week,setWeek] = React.useState(booking_week);
const [selectedTime, setSelectedTime] = React.useState('');

const handleBooking = () => {
if (!selectedTime) return 

setWeek(week.map((slot) => `${
slot.day}-${slot.time}` === selectedTime ? {...slot, booked: true} : slot
))}




return (
  <div>
    <h1>Meeting Calendar</h1>
{/* 
    {booking_week.map(({ day, time, booked }) => (
      <div key={`${day}-${time}`}>
        {day} {time}:00 — {booked ? 'Зайнято' : 'Вільно'}
      </div>
    ))} */}

    <select>
     {booking_week.map(({ day, time, booked }) => {
  if (!booked) {
    return (
      <option key={`${day}-${time}`} value={`${day}-${time}`}>
        {day} {time}:00
      </option>
    )
  } else {
    return null
  }
})}
    </select>
    <button onClick={() => {}}>Забронювати</button>
  </div>
);
}