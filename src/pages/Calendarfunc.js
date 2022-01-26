import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TopBar from './components/TopBar';

export default function Calendarfunc() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar'>
            <TopBar />
            <Calendar onChange={onChange} value={value} locale="en" />
        </div>
    )
}
