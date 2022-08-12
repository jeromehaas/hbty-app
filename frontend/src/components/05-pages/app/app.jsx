import BdayCard from "components/02-molecules/bday-card/bday-card";
import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const App = () => {

  const [bdays, setBdays] = useState([]);

  const fetchBdays = async () => {
    const response = await fetch('http://localhost:3003/bdays/get-all', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    const today = dayjs();
    const currentYear = dayjs().year();
    const pastBdays = [];
    const openBdays = [];
    console.log(currentYear);

    const filteredBdays = data.filter((item) => {
      const dateOfNextBday = dayjs(`${currentYear}-${item.birthday.month}-${item.birthday.day}`);
      if (dateOfNextBday.isAfter(today)) {
        openBdays.push(item);
      };
      if (dateOfNextBday.isBefore(today)) {
        pastBdays.push(item);
      };
    });
    console.log(filteredBdays);
    console.log('past bdays:', pastBdays);
    console.log('open bdays:', openBdays);
    setBdays(data);
  };




  useEffect(() => {
    fetchBdays();
  }, []);

  return (
    <div className="app">

      <div className="app__bdays">
        {bdays.map((item, index) => (
          <BdayCard data={item} key={index} />
        ))}
      </div>

    </div>
  );
}

export default App;
