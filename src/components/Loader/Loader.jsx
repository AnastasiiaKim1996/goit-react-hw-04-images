import { ImSpinner2 } from 'react-icons/im';

import css from 'components/Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.spinerWrapper}>
      <h2>Loading...</h2>
      <ImSpinner2 size="50" className={css.iconSpiner} />
    </div>
  );
};
