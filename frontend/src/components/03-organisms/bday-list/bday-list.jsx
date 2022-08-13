import dayjs from 'dayjs';
import { useEffect } from 'react';
import BdayCard from 'components/02-molecules/bday-card/bday-card';

const BdayList = ({ className, bdaysState, loadingState }) => {
const [ bdays, setBdays ] = bdaysState;
const [ loading, setLoading ] = loadingState;

  useEffect(() => {
    fetchBdays();
  }, [loading]);

  const fetchBdays = async () => {
    const response = await fetch('http://localhost:3003/bdays/get-all', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();
    const modifiedData = modifyData(data);
    const pastBdays = getPastBdays(modifiedData);;
    const currentBdays = getCurrentBdays(modifiedData);
    const openBdays = getOpenBdays(modifiedData);
    const sortedBdays = [...sortBdays(currentBdays), ...sortBdays(openBdays), ...sortBdays(pastBdays)];
    setBdays(sortedBdays);
  };

    const getDaysUntilNextBday = (day, month) => {
    const today = dayjs();
    const currentYear = dayjs().year();
    const dateOfNextBday = dayjs(`${currentYear}-${month}-${day}`);
    const year = dateOfNextBday.isAfter(today) ? currentYear : currentYear + 1;
    const nextBirthday = dayjs(`${year}-${month}-${day}`);
    const daysUntilNextBirthday = nextBirthday.diff(today, 'day');
    return daysUntilNextBirthday;
  };

    const getDateOfNextBday = (day, month) => {
    const today = dayjs();
    const currentYear = dayjs().year();
    const dateOfThisYearsBday = dayjs(`${currentYear}-${month}-${day}`);
    const year = dateOfThisYearsBday.isAfter(today) ? currentYear : currentYear + 1;
    const dateOfNextBday =`${day >= 10 ? day : `0${day}` }.${month >= 10 ? month : `0${month}`}.${year}`;
    return dateOfNextBday;
  }

    const getAgeOnNextBday = (day, month, year) => {
    const today = dayjs();
    const currentYear = dayjs().year();
    const dateOfNextBday = dayjs(`${currentYear}-${month}-${day}`);
    const yearOnNextBday = dateOfNextBday.isAfter(today) ? currentYear : currentYear + 1;
    const nextBdayDate = dayjs(`${yearOnNextBday}-${month}-${day}`);
    const bdayDate = dayjs(`${year}-${month}-${day}`);
    const ageOnNextBday = nextBdayDate.diff(bdayDate, 'year');
    return ageOnNextBday;
  };

  const modifyData = (bdays) => {
    return bdays.map((item) => {
        item.daysUntilNextBday = getDaysUntilNextBday(item.bdayDate.day, item.bdayDate.month);
        item.dateOfNextBday = getDateOfNextBday(item.bdayDate.day, item.bdayDate.month);
        item.ageOnNextBday = getAgeOnNextBday(item.bdayDate.day, item.bdayDate.month, item.bdayDate.year);
        return item;
    });
  };
  
  const sortBdays = (bdays) => {
    return bdays.sort((a, b) => a.daysUntilNextBday - b.daysUntilNextBday );
   };

   const getCurrentBdays = (bdays) => {
    const currentYear = dayjs().year();
    const today = dayjs();
    return bdays.filter((item) => {
      const dateOfNextBday = dayjs(`${currentYear}-${item.bdayDate.month}-${item.bdayDate.day}`);
      if (dateOfNextBday.isSame(today)) return item;
    });
   }

  const getOpenBdays = (bdays) => {
    const currentYear = dayjs().year();
    const today = dayjs();
    return bdays.filter((item) => {
      const dateOfNextBday = dayjs(`${currentYear}-${item.bdayDate.month}-${item.bdayDate.day}`);
      if (dateOfNextBday.isAfter(today)) return item;
    });
  };

  const getPastBdays = (bdays) => {
    const currentYear = dayjs().year();
    const today = dayjs();
    return bdays.filter((item) => {
      const dateOfNextBday = dayjs(`${currentYear}-${item.bdayDate.month}-${item.bdayDate.day}`);
      if (dateOfNextBday.isBefore(today)) return item;
    });
  };

    return (
        <div className={`${className ? className : '' } bday-list`}>
            {bdays.map((item, index) => (
                <BdayCard data={item} key={index} loadingState={[ loading, setLoading ]} />
            ))}
      </div>
    );

};

export default BdayList;