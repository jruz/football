import React, { useEffect, useState, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getConferences, ConferenceT } from '../actions';
import { StateT } from '../reducer';
import Table from './table';
import Footer from '../shared/footer';
import Loading from '../shared/loading';

const Conferences: FC = () => {
  const conferences = useSelector(({ conferences }: StateT) => conferences);
  const dispatch = useDispatch();
  const [list, setList] = useState<ConferenceT[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  useEffect(() => {
    dispatch(getConferences());
  }, []);
  useEffect(() => {
    setList(conferences);
  }, [conferences]);

  if (!list.length) return <Loading />;

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
