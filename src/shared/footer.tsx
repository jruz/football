import React, { FC, FormEvent } from 'react';
import style from './footer.scss';

const Footer: FC<{
  currentPage: number;
  setCurrentPage: Function;
  setPageSize: Function;
  totalPages: number;
  totalTeams: number;
}> = ({ currentPage, setCurrentPage, setPageSize, totalPages, totalTeams }) => {
  const onPageSize = (e: FormEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLSelectElement;
    setPageSize(value);
    setCurrentPage(1);
  };

  const onNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <footer className={style.footer}>
      <p className="is-hidden-mobile">{totalTeams} in total</p>
      <ul className={style.buttons}>
        <li>
          <button
            className="button"
            onClick={onPrevPage}
            disabled={currentPage === 1}
          >
            prev
          </button>
        </li>
        <li className={style.count}>
          {currentPage} of {totalPages}
        </li>
        <li>
          <button
            className="button"
            onClick={onNextPage}
            disabled={currentPage === totalPages}
          >
            next
          </button>
        </li>
      </ul>
      <div className="select">
        <select onChange={onPageSize}>
          <option>10</option>
          <option>5</option>
          <option>3</option>
        </select>
      </div>
    </footer>
  );
};

export default Footer;
