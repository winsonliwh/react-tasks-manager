import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import NewTask from "./components/NewTask";

// const events = [
//     {
//         name: "Big Meeting",
//         allDay: true,
//         startDate: new Date(2022, 1, 10),
//         dueDate: new Date(2022, 1, 11),
//     },
//     {
//         name: "Vacation",
//         startDate: new Date(2022, 1, 11),
//         dueDate: new Date(2022, 1, 11)
//     },
//     {
//         name: "Conference",
//         startDate: new Date(2022, 1, 12),
//         dueDate: new Date(2022, 1, 15)
//     }
// ]

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

export default function Calendarfunc({ tasks }) {

    const allEvents = tasks.filter(task => task.done === false);
    const eventsDateChangeFormat = allEvents.map(task => {
        return {
            ...task,
            startDate: new Date(task.startDate),
            dueDate: new Date(task.dueDate + 86400000)
        }
    })

    return (
        <div className="calendarPage">
            <div className="calendarDiv">
                <h1 className="calendarTitle">calendar</h1>
                <NewTask />
                <Calendar
                    localizer={localizer}
                    events={eventsDateChangeFormat}
                    popup
                    views={['month', 'agenda']}
                    titleAccessor="name"
                    startAccessor="startDate"
                    endAccessor="dueDate"
                />
            </div>
        </div>
    )
}
