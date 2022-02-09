import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function Calendarfunc() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar'>
            <Calendar onChange={onChange} value={value} locale="en" />
        </div>
    )
}
