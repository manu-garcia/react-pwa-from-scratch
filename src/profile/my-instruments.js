import React, { Component } from 'react';
import TagsCloud from '../components/tags-cloud/tags-cloud';

class MyInstruments extends Component {

  constructor (props) {
    super(props);
    this.tags = new Map();
    this.tags.set('Guitar', {name: 'Guitar', selected: false});
    this.tags.set('Banjo', {name: 'Banjo', selected: false});
    this.tags.set('Drums', {name: 'Drums', selected: false});

    this.state = {
      tags: this.tags,
    };
  }

  onTagClick (tag) {
    tag.selected = !tag.selected;
    this.setState({
      tags: this.tags
    });
  }

  render () {
    return (
      <div className="my-instruments-component">
        <TagsCloud tags={this.state.tags} onTagClick={(tag) => this.onTagClick(tag)} />
      </div>
    );
  }
}

export default MyInstruments;
