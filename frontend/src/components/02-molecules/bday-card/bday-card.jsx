import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const BdayCard = ({ data, loadingState }) => {

  const [loading, setLoading ] = loadingState;

  const deleteBday = async (id) => {
    setLoading(true);
    const response = await fetch('http://localhost:3003/bdays/delete-one', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: id }),
    });
    const data = await response.json();
    console.log(data);
    setLoading(false);
  }

  return (
    <div className="bday-card">
      <div className="bday-card__date date">
        <p className="date__text">{ data.dateOfNextBday }</p>
      </div>
      <div className="bday-card__infos infos">
        <FontAwesomeIcon className="infos__icon" icon={faXmark} onClick={ () => deleteBday(data._id)}/>
        <p className="infos__name">{data.firstname} {data.lastname}</p>
        <p className="infos__status-message">{`Will be ${ data.ageOnNextBday } in ${ data.daysUntilNextBday} days`}</p>
      </div>
    </div>
  );

};

export default BdayCard;