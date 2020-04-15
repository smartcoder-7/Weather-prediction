import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { LoadingContainer } from '../../../containers';
import { InputForm } from '../../../components';

const WeatherList = () => {
  const forecastList = useSelector((state) => state.app.list);
  const isLoading = useSelector((state) => state.app.isLoading);

  const renderTable = (list) => {
    if (!list.length) {
      return (
        <tr>
          <td colSpan={2}>No data</td>
        </tr>
      );
    }
    return list.map((item, index) => (
      <tr key={item.dt}>
        <td>
          <Link to={`/${item.dt}`}>{moment(item.dt).format('L')}</Link>
        </td>
        <td>{item.toString()}</td>
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
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>{renderTable(forecastList)}</tbody>
            </Table>
          </Card.Body>
        </Card>
      </LoadingContainer>
    </Container>
  );
};

export default WeatherList;
