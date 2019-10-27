import React, { FC } from 'react';
import Table from '../shared/table';

import { ConferenceT } from '../actions';

const ConfTable: FC<{ conferences: ConferenceT[] }> = ({ conferences }) => (
  <Table>
    <thead>
      <tr>
        <th>Abbr.</th>
        <th>Name</th>
        <th>Short Name</th>
      </tr>
    </thead>
    <tbody>
      {conferences.map(({ abbreviation, name, short_name, id }) => {
        return (
          <tr key={id}>
            <td>{abbreviation}</td>
            <td>{name}</td>
            <td>{short_name}</td>
          </tr>
        );
      })}
    </tbody>
  </Table>
);

export default ConfTable;
