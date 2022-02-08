import { useState, useEffect } from "react";

export default function Time() {
    // const [date, setDate] = useState(new Date());
    // const months = ["01","02","03","04","05","06","07","08","09","10","11","12"]
    // const nowDay = date.getFullYear('en-US') + "-" + months[date.getMonth()] + "-" + date.getDate('en-US')
    // const nowTime = date.toLocaleTimeString('en-US', { hour12: false })

    // const componentDidMount = () => {
    //     const oneSecond = 1000;
    //     setInterval(() => {
    //         setDate(new Date());
    //     }, oneSecond);
    // };

    const [dateState, setDateState] = useState();
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setDateState(date.toLocaleDateString('en-CA', {
                year: "numeric",
                month: "2-digit",
                day: "2-digit"
            }));
            setClockState(date.toLocaleTimeString('en-US', { 
                hourCycle: 'h23',
                hour: '2-digit',
                minute: '2-digit'
            }));
        }, 1000);
    }, []);

    return (
        <div className="topBarDateTime" /* onChange={componentDidMount()} */>
            <span>
                {dateState}
            </span>
            <span>
                {clockState}
            </span>
        </div>
    );
};