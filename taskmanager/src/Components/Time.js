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
        <div onChange={componentDidMount()}>
            <div className="text-dark mx-3">
                {date.toLocaleDateString('en-US')}
            </div>
            <div className="text-dark mx-3">
                {date.toLocaleTimeString('en-US')}
            </div>
        </div>
    );
};