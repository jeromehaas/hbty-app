
const BdayCard = ({ data }) => {

  return (
    <div className="bday-card">
      <div className="bday-card__date date">
        <p className="date__text">{`${data.birthday.day}.${data.birthday.month}.${data.birthday.year}`}</p>
      </div>
      <div className="bday-card__infos infos">
        <p className="infos__name">{data.firstname} {data.lastname}</p>
        <p className="infos__status-message">Will be 28 in 12 days</p>
      </div>
    </div>
  );

};

export default BdayCard;