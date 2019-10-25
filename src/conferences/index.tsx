import React, { useEffect, useState, FC, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConferences } from '../actions';
import { StateT, ConferenceT } from '../reducer';
import Footer from '../shared/footer';

const Table: FC<{ conferences: ConferenceT[] }> = ({ conferences }) => (
  <table className="table is-striped is-fullwidth">
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
  </table>
);

const Conferences: FC = () => {
  const conferences = useSelector(({ conferences }: StateT) => conferences);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(getConferences());
  }, []);
  useEffect(() => {
    setList(conferences);
  }, [conferences]);

  if (!list.length) return <p>loading...</p>;

  const totalPages = Math.ceil(list.length / pageSize);
  const end = currentPage * pageSize;
  const start = end - pageSize;
  const page = list.slice(start, end);

  return (
    <section className="container">
      <h1 className="title is-1">Conferences</h1>
      <Table conferences={page} />
      <Footer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setPageSize={setPageSize}
        totalPages={totalPages}
        totalTeams={list.length}
      />
    </section>
  );
};

export default Conferences;
