import React, { useState } from 'react';
import Calendar from 'react-calendar';
import Menu from './Menu';
import 'react-calendar/dist/Calendar.css';

export default function Calendarfunc() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Menu />
            <Calendar onChange={onChange} value={value} locale="en" />
        </div>
    )
}
