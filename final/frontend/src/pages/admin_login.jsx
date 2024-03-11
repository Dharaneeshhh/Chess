import React from 'react';
import { Form, Button, ButtonToolbar, Schema, Panel } from 'rsuite';
import '../assets/css/admin_login.css'
import { Link } from 'react-router-dom';
const { StringType } = Schema.Types;
const model = Schema.Model({
  name: StringType().isRequired('This field is required.'),
  email: StringType()
    .isEmail('Please enter a valid email address.')
    .isRequired('This field is required.')
});

function TextField(props) {
  const { name, label, accepter, ...rest } = props;
  return (
    <Form.Group controlId={`${name}-3`}>
      <Form.ControlLabel>{label} </Form.ControlLabel>
      <Form.Control name={name} accepter={accepter} {...rest} />
    </Form.Group>
  );
}
const Adminlogin = () => {
    return (
        <div className='admin__container'>
            <div className='admin__in'>
               <Form model={model}>
      <TextField name="email" label="Email" />
      <TextField name="name" label="Password" />
      <div className='admin__btn'>
      <ButtonToolbar>
        <Link to={`/dashboard`}><Button appearance="primary" type="submit">
          Submit
        </Button></Link>
      </ButtonToolbar>
      </div>
    </Form>
    </div>
        </div>
    );
};

export default Adminlogin  ;