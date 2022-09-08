import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, url } = this.props;
    return (
      <div>

      <div className="card" style={{ width: "18rem" }}>
        <img src={!imgUrl ? "https://static01.nyt.com/images/2022/07/20/multimedia/20xp-keyboard6/20xp-keyboard6-facebookJumbo.jpg" : imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={url} target={"_blank"} className="btn btn-sm btn-primary">
            More
          </a>
        </div>
      </div>
      
      </div>
    );
  }
}

export default NewsItem;
