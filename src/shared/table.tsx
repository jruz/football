import React, { FC } from 'react';
import style from './table.scss';

const Table: FC = ({ children }) => (
  <div className={style.container}>
    <table className="table is-striped is-fullwidth">{children}</table>
  </div>
);

export default Table;
