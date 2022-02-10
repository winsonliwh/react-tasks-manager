// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function Calendarfunc() {
//     const [value, onChange] = useState(new Date());

//     return (
//         <div className='calendar'>
//             <Calendar onChange={onChange} value={value} locale="en" />
//         </div>
//     )
// }

import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React, { useState } from "react";
import DatePicker from "react-datepicker";

const locales = {
    "en-US": require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2022,1,10),
    end: new Date(2022,1,10)
    },
    {
    title: "Vacation",
    start: new Date(2022,1,11),
    end: new Date(2022,1,11)
    },
    {
    title: "Conference",
    start: new Date(2022,1,12),
    end: new Date(2022,1,15)
    }
]

export default function Calendarfunc() {
    const [newEvent, setNewEvent] = useState
    ({
        title: "",
        start: "",
        end: ""
    });

    const [allEvents, setAllEvents] = useState(events);

    const handleAddEvent = () => {
        setAllEvents([...allEvents, newEvent])
    }

    return(
        <div className="calendarDiv">
            <h1>Calendar</h1>
            <Calendar 
            localizer={localizer} 
            events={allEvents} 
            startAccessor="start"
            endAccessor="end"
            />
        </div>
    )
}
