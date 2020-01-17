import React, { Component } from 'react';
import { connect } from 'react-redux';
import { generateTiles } from '../../../redux/actions/tileActions';
import TextInput from '../../../components/Forms/TextInput';
import './GenerateForm.scss';

class GenerateForm extends Component {
  constructor() {
    super();

    this.state = {
      row: 0,
      column: 0
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onGenerate = () => {
    const { row, column } = this.state;
    this.props.generateTiles(row, column);
  }

  setAllToDefault = () => {
    this.props.generateTiles({ row: 0, column: 0 });
    setTimeout(() => this.props.generateTiles(this.state));
  }

  render() {
    const { row, column } = this.state;

    return (
      <div className="generate-form">
        <TextInput name="row" label="Row" value={ row } onChange={ this.onChange } />
        <TextInput name="column" label="Column" value={ column } onChange={ this.onChange } />
        <div className="generate-form__buttons">
          <button className="button" onClick={ this.onGenerate }>Generate Tiles</button>
          <button className="button button--grey" onClick={ this.setAllToDefault }>Set all to default</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { generateTiles })(GenerateForm);