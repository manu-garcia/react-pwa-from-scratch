import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagsCloud from '../components/tags-cloud/tags-cloud';
import { fetchInstruments, setInstruments } from '../actions/profile.actions'

@connect(store => {
  return {
    instruments: store.profile.instruments,
  };
})
class MyInstruments extends Component {

  componentWillMount () {
    this.props.dispatch(fetchInstruments());
  }

  onTagClick (tag) {
    // tag.selected = !tag.selected;
    // this.setState({
    //   tags: this.tags
    // });
  }

  render () {

    return (
      <div className="my-instruments-component">
        <TagsCloud tags={this.props.instruments} onTagClick={(tag) => this.onTagClick(tag)} />
      </div>
    );
  }
}

export default MyInstruments;
