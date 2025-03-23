// import { FaRegThumbsUp } from 'react-icons/fa';
// import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
// import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

// const icons = {
//   thumbsUp: FaRegThumbsUp,
//   people: MdPeople,
//   production: MdOutlineProductionQuantityLimits,
//   tree: GiTreeDoor,
// };

const Statistics = ({ title, stats }) => {
  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {stats.map(stat => (
          <li key={stat.id} className={style.item}>
            <StatisticsItem title={stat.title} total={stat.total} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
