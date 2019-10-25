import React, { FC } from 'react';
import { TeamT } from '../reducer';

const Table: FC<{ teams: TeamT[] }> = ({ teams }) => (
  <table className="table is-striped is-fullwidth">
    <thead>
      <tr>
        <td></td>
        <td>Abbr.</td>
        <td>School</td>
        <td>Mascot</td>
        <td>Division</td>
        <td>Conference</td>
      </tr>
    </thead>
    <tbody>
      {teams.map(
        ({ abbreviation, conference, division, id, logos, mascot, school }) => {
          return (
            <tr key={id}>
              <td>{logos && <img src={logos[0]} width={25} height={25} />}</td>
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
);

export default Table;
