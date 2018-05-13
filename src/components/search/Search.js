import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';

class Search extends Component {
    state = {
        searchText: '',
        amount: 10,
        apiUrl: 'https://pixabay.com/api',
        apiKey: '8983829-203d354f765ace434ed5905aa',
        images: []
    }

  render() {
    return (
      <div>
        <TextField
            name = "searchText"
            value = {this.state.searchText}
            onChange = {this.onTextChange}
            floatingLabelText="Search For Images"
            fullWidth={true}
            />
      </div>
    );
  }
}

export default Search;
