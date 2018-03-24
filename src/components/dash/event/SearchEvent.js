import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import TextField from 'material-ui/TextField';

/**
 * `DatePicker` can be implemented as a controlled input,
 * where `value` is handled by state in the parent component.
 */
export default class DatePickerExampleControlled extends React.Component {

  constructor(props) {
    super(props);

  }



  render() {
    return (
        <div>
        <p/>
          <DatePicker
            hintText="data inicial"
            autoOk={true}
            style={{float:"left"}}
            />
          <DatePicker
            hintText="data final"
            autoOk={true}
            style={{float:"right"}}
          />
          <TextField
              type="text"
              fullWidth={true}
              hintText="informe nome do evento"
              floatingLabelFixed={false}
          />
        </div>
    );
  }
}
