import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Time() {
    const [date, setDate] = useState(new Date());

    const componentDidMount = () => {
      // Paste your code here.
      const oneSecond = 1000;
      setInterval(() => {
        setDate(new Date());
      }, oneSecond);
    };
    
    return (
        <div className="topBarDateTime" onChange={componentDidMount()}>
            <span>
                {date.toLocaleDateString('en-US')}
            </span>
            <span>
                {date.toLocaleTimeString('en-US', { hour12: false })}
            </span>
        </div>
    );
};