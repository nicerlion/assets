import React from 'react';
import { Field, reduxForm } from 'redux-form';

const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

let LoginForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit}>
    <div>
        <Field
            name="username"
            type="text"
            component={renderField}
            label="Username"
            validate={[required]}
        />
      <Field
            name="email"
            type="email"
            component={renderField}
            label="Email"
            validate={[required, email]}
      />
    <button type="submit">Submit</button>
    </div>
  </form>
}

export default LoginForm = reduxForm({
  form: 'login'
})(LoginForm)