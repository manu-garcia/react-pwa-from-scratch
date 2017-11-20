import React, { Component } from 'react';

class TagsCloud extends Component {

  constructor (props) {
    super(props);
  }

  onClick(tag) {
    if (this.props.onTagClick) {
      this.props.onTagClick(tag);
    }
  }

  renderTags () {
    let list = [];
    
    this.props.tags.forEach((value, key) => {
      list.push(<li key={key} style={{border: value.selected ? '1px solid black' : ''}} onClick={(event) => this.onClick(value)}>{value.name}</li>)
    })

    return (
      <ul>{list}</ul>
    );
  }

  render () {
    return (
      <div className="tags-cloud-component">
        {this.renderTags()}
      </div>
    );
  }
}

export default TagsCloud;
