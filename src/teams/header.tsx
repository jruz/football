import React, { FC, ChangeEvent, HTMLSelectElement } from 'react';
import style from './header.scss';

const Header: FC<{
  onChange: ChangeEvent<HTMLSelectElement>;
  conferences: string[];
}> = ({ onChange, conferences }) => (
  <header className={style.header}>
    <h1 className="title is-1">Teams</h1>
    <div className="select">
      <select onChange={onChange}>
        <option>Conference</option>
        {conferences.map((name) => (
          <option key={name}>{name}</option>
        ))}
      </select>
    </div>
  </header>
);

export default Header;
