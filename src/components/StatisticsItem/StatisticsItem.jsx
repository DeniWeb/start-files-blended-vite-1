import style from './StatisticsItem.module.css';

const StatisticsItem = () => {
  return (
    <>
      {/* Тут повинна бути іконка */}
      <span className={style.counter}>2147</span>
      <p className={style.text}>Happy Customers</p>
    </>
  );
};

export default StatisticsItem;
