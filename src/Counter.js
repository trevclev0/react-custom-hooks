import PropTypes from 'prop-types';
import useCounter from './useCounter';

export default function Counter({ initCount }) {
  const {
    count, increaseCount, decreaseCount, resetCount,
  } = useCounter(initCount);

  return (
    <>
      <button type="button" onClick={increaseCount}>Increase Count</button>
      <button type="button" onClick={decreaseCount}>Decrease Count</button>
      <button type="button" onClick={resetCount}>Reset Count</button>
      <h2>
        Current Count:
        {count}
      </h2>
    </>
  );
}

Counter.propTypes = {
  initCount: PropTypes.number.isRequired,
};
