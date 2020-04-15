import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { forecastListRequest } from '../../screens/redux/actions';

const validationSchema = yup.object({
  city: yup.string().required(),
});

const InputForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    const { city } = values;
    dispatch(forecastListRequest({ city }));
  };

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      initialValues={{ city: '' }}
    >
      {({ handleSubmit, handleChange, values, isValid, errors }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} sm={8}>
              <Form.Control
                name="city"
                placeholder="Input the city"
                onChange={handleChange}
                value={values.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Col sm={4}>
              <Button
                block
                variant="secondary"
                type="submit"
                disabled={!isValid}
              >
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
