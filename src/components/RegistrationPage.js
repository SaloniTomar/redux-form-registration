import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const RegistrationPage = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="firstName" component={renderField} type="text" label="First Name"/>
      </div>
      <div>
        <Field name="lastName" component={renderField} type="text" label="Last Name"/>
      </div>
      <div>
        <button type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'travelForm',
  destroyOnUnmount:false,
  forceUnregisterOnUnmount : true,
  validate
})(RegistrationPage);
