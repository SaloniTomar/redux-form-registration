const validate = values => {
    const errors = {};
    const validName= /^[A-Za-z]+$/;
    const validDAte= /^20(1?[7-9]|2[0-9])[/-](0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])$/;
    if (!values.firstName) {
      errors.firstName = 'Required';
    } else if (!validName.test(values.firstName)) {
      errors.firstName = 'Invalid First Name';
    }
    if (!values.lastName) {
      errors.lastName = 'Required';
    } else if (!/^[A-Za-z]+$/i.test(values.lastName)) {
      errors.lastName = 'Invalid Last Name ';
    }
    if (!values.startDate) {
      errors.startDate = 'Required';
    } else if (!validDAte.test(values.startDate)) {
      errors.startDate = 'Invalid Date ';
    }
    if (!values.endDate) {
      errors.endDate = 'Required';
    } else if (!validDAte.test(values.endDate)) {
      errors.endDate = 'Invalid Date ';
    }
    if (!values.origin) {
      errors.origin = 'Required';
    } else if (!validName.test(values.origin)) {
      errors.origin = 'Invalid Location ';
    }
    if (!values.destination) {
      errors.destination = 'Required';
    } else if (!validName.test(values.destination)) {
      errors.destination = 'Invalid Location ';
    }
    return errors;
  };
  
  export default validate;
  