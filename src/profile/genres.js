import React, { Component } from 'react';
import { connect } from 'react-redux';

import TagsCloud from '../components/tags-cloud/tags-cloud';
import { fetchGenres, setGenres } from '../actions/profile.actions'

@connect(store => {
  return {
    genres: store.profile.genres,
  };
})
class MyGenres extends Component {

  componentWillMount () {
    this.props.dispatch(fetchGenres());
  }

  onTagClick (tag) {
    // tag.selected = !tag.selected;
    // this.props.dispatch(setGenres(this.selectGenre(tag)));
    // this.setState({
    //   tags: this.tags
    // });
  }

  render () {
    return (
      <div className="my-genres-component">
        <TagsCloud tags={this.props.genres} onTagClick={(tag) => this.onTagClick(tag)} />
      </div>
    );
  }
}

export default MyGenres;
