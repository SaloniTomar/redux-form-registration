import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';
import renderDate from './renderDate';
import moment from 'moment';

moment().local();
var today=moment().format('YYYY-MM-DD');

//const startDate = values.startDate};

const DetailsPage = props => {
  const { handleSubmit, pristine, previousPage, submitting, firstName, lastName } = props;
  return (
    <form onSubmit={handleSubmit}>
      <span><b>First Name : </b>{firstName}</span>
      <span><b>Last Name : </b>{lastName}</span>
      <Field name="startDate" min={today} component={renderDate} label="Start Date"/>
      <Field name="endDate" min={today} component={renderDate} label="End Date"/>
      <Field name="origin" type="text" component={renderField} label="Origin"/>
      <Field name="destination" type="text" component={renderField} label="Destination"/>
      <div>
      <button type="button" className="previous" onClick={previousPage}>
        Previous
      </button>
      <button type="submit" disabled={pristine || submitting}>Submit</button>
    </div>
    </form>
  );
};

export default reduxForm({
  form: 'travelForm', 
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(DetailsPage);
