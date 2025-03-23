// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = stats => {
  return (
    <>
      <h3 className={style.title}>Main Statistics</h3>
      <ul className={style.list}>
        {stats.map(el => (
          <StatisticsItem />
        ))}
      </ul>
    </>
  );
};

export default Statistics;
