import React, { FC } from 'react';
import { TeamT } from '../reducer';
import style from './table.scss';

const Table: FC<{ teams: TeamT[] }> = ({ teams }) => (
  <div className={style.container}>
    <table className="table is-striped is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th>Abbr.</th>
          <th>School</th>
          <th>Mascot</th>
          <th>Division</th>
          <th>Conference</th>
        </tr>
      </thead>
      <tbody>
        {teams.map(
          ({
            abbreviation,
            conference,
            division,
            id,
            logos,
            mascot,
            school,
          }) => {
            return (
              <tr key={id}>
                <td>
                  {logos && <img src={logos[0]} width={25} height={25} />}
                </td>
                <td>{abbreviation}</td>
                <td>{school}</td>
                <td>{mascot}</td>
                <td>{division}</td>
                <td>{conference}</td>
              </tr>
            );
          },
        )}
      </tbody>
    </table>
  </div>
);

export default Table;
