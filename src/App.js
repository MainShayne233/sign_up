import React, { Component } from 'react';
import FormFactor from '../../react-form-factor/lib/react-form-factor.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormFactor
          fields={fields}
        />
      </div>
    );
  }
}

const fields = [
  {
    name: 'username',
    placeholder: 'Username',
    fieldType: 'input',
    dataType: 'string',
  },
  {
    name: 'password',
    placeholder: 'Password',
    fieldType: 'input',
    dataType: 'string',
  }
]

export default App;
