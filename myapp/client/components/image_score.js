import React from 'react';

class ImageScore extends React.Component {

  constructor(props) {
    super(props);

    const {ups, downs} = props;  //NOTE es6 destructuring assignment

    // NOTE es6 template string
    this.upvotePercent = `${100 * ups / (ups + downs)}%`;
    this.downvotePercent = `${100 * downs / (ups + downs)}%`;
  }

  render() {
    return (
      <div>
        Ups/Downs
        <div className="progress">
          <div style={{width: this.upvotePercent}}
            className="progress-bar progress-bar-success progress-striped"></div>
          <div style={{width: this.downvotePercent}}
            className="progress-bar progress-bar-danger progress-striped"></div>
        </div>
      </div>
    );
  }

}

export default ImageScore;
