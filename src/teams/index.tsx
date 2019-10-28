import React, { useEffect, useState, FC, FormEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getTeams, TeamT } from '../actions';
import { StateT } from '../reducer';
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
  const [list, setList] = useState<TeamT[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    dispatch(getTeams());
  }, []);
  useEffect(() => {
    setList(teams);
  }, [teams]);

  const onChange = (e: FormEvent<HTMLSelectElement>): void => {
    const { value } = e.target as HTMLSelectElement;
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
      <Header onChange={onChange} conferences={conferences} />
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
