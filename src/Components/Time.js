import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Time() {
    const [date, setDate] = useState(new Date());

    const componentDidMount = () => {
        const oneSecond = 1000;
        setInterval(() => {
            setDate(new Date());
        }, oneSecond);
    };

    return (
        <div className="topBarDateTime" onChange={componentDidMount()}>
            <span>
                <p>
                    {date.toLocaleDateString('en-US')}
                </p>
            </span>
            <span>
                <p>
                    {date.toLocaleTimeString('en-US')}
                </p>
            </span>
        </div>
    );
};