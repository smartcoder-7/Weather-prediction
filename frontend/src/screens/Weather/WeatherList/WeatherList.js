import React, { useState, useEffect } from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Pagination from 'react-paginate';

import { LoadingContainer } from '../../../containers';
import { InputForm } from '../../../components';

const WeatherList = () => {
  const forecastList = useSelector((state) => state.app.list);
  const isLoading = useSelector((state) => state.app.isLoading);
  const [paginatedList, setPaginatedList] = useState([]);

  useEffect(() => {
    console.log(forecastList.slice(0, 7));
    setPaginatedList(forecastList.slice(0, 7));
  }, [forecastList]);

  const handlePageClick = (data) => {
    let selected = data.selected;
    let skip = Math.ceil(selected * 8);
    setPaginatedList(forecastList.slice(skip, skip + 8));
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
    <Container>
      <LoadingContainer loading={isLoading}>
        <Card>
          <Card.Header>
            <InputForm />
          </Card.Header>
          <Card.Body>
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
          </Card.Body>
        </Card>
      </LoadingContainer>
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
