import React, { useState } from 'react';
import Calendar from 'react-calendar'
import Menu from './Menu';

export default function Calendarfunc() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Menu />
            <Calendar onChange={onChange} value={value} />
        </div>
    )
}
