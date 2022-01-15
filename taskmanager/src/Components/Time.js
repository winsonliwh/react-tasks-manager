import { useState } from "react";

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
        <div onChange={componentDidMount()}>
            <div>
                {date.toLocaleDateString('en-US')}
            </div>
            <div>
                {date.toLocaleTimeString('en-US')}
            </div>
        </div>
    );
};