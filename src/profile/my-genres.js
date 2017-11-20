import React, { Component } from 'react';
import TagsCloud from '../components/tags-cloud/tags-cloud';

class MyGenres extends Component {

  constructor () {
    super();
    this.tags = new Map();
    this.tags.set('Rock', {name: 'Rock', selected: false});
    this.tags.set('Jazz', {name: 'Jazz', selected: false});
    this.tags.set('Blues', {name: 'Blues', selected: false});

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
      <div className="my-genres-component">
        <TagsCloud tags={this.state.tags} onTagClick={(tag) => this.onTagClick(tag)} />
      </div>
    );
  }
}

export default MyGenres;
