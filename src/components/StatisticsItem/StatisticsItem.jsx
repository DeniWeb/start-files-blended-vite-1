import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ title, total, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '30' }}>{icon}</IconContext.Provider>
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
