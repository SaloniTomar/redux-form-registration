import React from 'react';
import {DateTimePicker} from 'react-widgets';
import moment from 'moment';

import 'react-widgets/dist/css/react-widgets.css'

const renderDate = ({ input, label,min, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type='date' min={min}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderDate;
