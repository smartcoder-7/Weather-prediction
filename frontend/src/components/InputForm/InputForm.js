import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import { forecastListRequest } from '../../screens/redux/actions';

const validationSchema = yup.object({
  city: yup.string().required('City is required!'),
});

const InputForm = ({ isLoading }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ city }) => {
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
            <Form.Group as={Col} sm={6}>
              <Form.Control
                type="text"
                name="city"
                placeholder="Input the city"
                onChange={handleChange}
                value={values.city}
                isInvalid={!!errors.city}
              />
              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Col sm={6}>
              <Button
                variant="secondary"
                type="submit"
                disabled={!isValid || isLoading}
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
