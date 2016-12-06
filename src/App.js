import React, { Component } from 'react';
import FormFactor from '../../react-form-factor/lib/react-form-factor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormFactor
          fields={fields}
          submit={submit}
          onSubmit={onSubmit}
          onChange={onChange}
        />
      </div>
    );
  }
}

const submit = {
  button: true,
}

const onSubmit = (form, event) => {
  event.preventDefault()
  console.log(':)')
}

const onChange = (form, event) => {
  console.log(':))')
}

const fields = [
  {
    name: 'username',
    placeholder: 'Username',
    defaultValue: 'Shayne',
    fieldType: 'input',
    dataType: 'string',
    // onChange: () => {
    //   console.log(':o')
    // },
  },
  {
    name: 'password',
    defaultValue: "tremblay",
    placeholder: 'Password',
    fieldType: 'input',
    dataType: 'string',
  }
]

export default App;
