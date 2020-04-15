import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

import { InputForm } from '../../components';

const Weather = () => {
  const forecastList = useSelector((state) => state.app.list);

  const renderTable = (list) => {
    if (!list.length) {
      return (
        <tr>
          <td>No data</td>
        </tr>
      );
    }
    return list.map((item, index) => (
      <tr key={index}>
        <td>{item.toString()}</td>
      </tr>
    ));
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Weather;
