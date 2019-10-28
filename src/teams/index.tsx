import React, { useEffect, useState, FC, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTeams } from '../actions';
import { StateT, TeamT } from '../reducer';
import Table from './table';
import Header from './header';
import Footer from '../shared/footer';
import Loading from '../shared/loading';

const getNames = (list: string[], team: TeamT): string[] => {
  const { conference } = team;
  if (!conference) return list;
  if (list.includes(conference)) return list;
  return [...list, conference];
};

const Teams: FC = () => {
  const teams = useSelector(({ teams }: StateT) => teams);
  const conferences = teams.reduce(getNames, []);
  const dispatch = useDispatch();
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  useEffect(() => {
    setList(teams);
  }, [teams]);

  const onConference = (e: FormEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    if (value === 'Conference') return setList(teams);
    const fromConference = teams.filter(
      ({ conference }) => conference === value,
    );
    setList(fromConference);
    setCurrentPage(1);
  };

  if (!list.length) return <Loading />;

  const totalPages = Math.ceil(list.length / pageSize);
  const end = currentPage * pageSize;
  const start = end - pageSize;
  const page = list.slice(start, end);

  return (
    <section className="container">
      <Header onChange={onConference} conferences={conferences} />
      <Table teams={page} />
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

export default Teams;
