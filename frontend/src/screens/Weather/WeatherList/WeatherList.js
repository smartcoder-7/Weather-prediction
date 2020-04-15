import React, { useState, useEffect } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Pagination from 'react-paginate';

import { LoadingContainer } from '../../../containers';
import { InputForm } from '../../../components';
import { PAGE_LIMIT } from '../../../config';

const WeatherList = () => {
  const forecastList = useSelector((state) => state.app.list);
  const isLoading = useSelector((state) => state.app.isLoading);
  const city = useSelector((state) => state.app.city);
  const [paginatedList, setPaginatedList] = useState([]);

  useEffect(() => {
    setPaginatedList(forecastList.slice(0, PAGE_LIMIT));
  }, [forecastList]);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let skip = Math.ceil(selected * PAGE_LIMIT);
    setPaginatedList(forecastList.slice(skip, skip + PAGE_LIMIT));
  };

  const renderTable = (list) => {
    if (!list.length) {
      return (
        <tr>
          <td colSpan={4} className="text-center">
            No data!
          </td>
        </tr>
      );
    }

    return list.map((item) => (
      <tr key={item.dt}>
        <td>
          <Link to={`/${item.dt}`}>{moment(item.dt_text).format('LLLL')}</Link>
        </td>
        <td>{item.weather[0].main}</td>
        <td>{item.weather[0].description}</td>
        <td>
          <img
            alt="img"
            src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
            width="30px"
            height="30px"
          />
        </td>
      </tr>
    ));
  };

  return (
    <Container className="mt-5">
      <InputForm isLoading={isLoading} />
      <Card>
        <Card.Header className="text-center">
          {'Weather Overview' + (!!city ? ` of ${city}` : '')}
        </Card.Header>
        <Card.Body>
          <LoadingContainer loading={isLoading}>
            <Table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Main</th>
                  <th>Desciption</th>
                  <th>Icon</th>
                </tr>
              </thead>
              <tbody>{renderTable(paginatedList)}</tbody>
            </Table>
          </LoadingContainer>
        </Card.Body>
      </Card>
      {!!forecastList.length && (
        <div className="card-footer d-flex">
          <Pagination
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={Math.ceil(forecastList.length / 8)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
        </div>
      )}
    </Container>
  );
};

export default WeatherList;
