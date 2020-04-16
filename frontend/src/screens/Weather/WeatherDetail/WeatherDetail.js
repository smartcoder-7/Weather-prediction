import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { FIELD_MAP } from '../../../utils/constants';
import { scaleUnit } from '../../../utils/helpers';

const WeatherDetail = () => {
  const { id } = useParams();
  const forecastList = useSelector((state) => state.app.list);
  const city = useSelector((state) => state.app.city);

  const detail = forecastList.find((item) => item.dt === Number(id));
  console.log('detail', detail);

  const renderDetail = (data) => {
    if (!data) {
      return <div className="text-center">No data!</div>;
    }

    return (
      <>
        {Object.entries(data.main).map((entry, index) => (
          <Row key={`detail_${index}`}>
            <Col>{FIELD_MAP[entry[0]] && FIELD_MAP[entry[0]]['name']}</Col>
            <Col>
              {FIELD_MAP[entry[0]] &&
                scaleUnit(entry[1], FIELD_MAP[entry[0]]['scaleFactor']) +
                  ' ' +
                  FIELD_MAP[entry[0]]['unit']}
            </Col>
          </Row>
        ))}
      </>
    );
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header className="text-center">
          {'Weather Detail' + (!!city ? ` of ${city}` : '')}
        </Card.Header>
        <Card.Body>{renderDetail(detail)}</Card.Body>
        <Card.Footer>
          <Link to="/">Back</Link>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default WeatherDetail;
