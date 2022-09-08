import React, { Component } from "react";
import BasicExample from "./NewsItem";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    // console.log("hello from cdm");
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b74f0cd4f1774216bc97054408bb34e9&page=1";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });
  }

  handleNext = async () => {
    // console.log("next");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b74f0cd4f1774216bc97054408bb34e9&page=${
      this.state.page + 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page + 1,
    });
  };
  handlePrev = async () => {
    // console.log("prev");

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b74f0cd4f1774216bc97054408bb34e9&page=${
      this.state.page - 1
    }`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles });

    this.setState({
      page: this.state.page - 1,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsApp top headLines</h2>
        <div className="container d-flex justify-content-between">
          <button
            // disabled="this.State."
            type="button"
            className="btn btn-info"
            onClick={this.handlePrev}
          >
            prev
          </button>
          <button type="button" className="btn btn-info" onClick={this.handleNext}>
            next
          </button>
        </div>
        <div className="row" style={{ height: "100px" }}>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : " "}
                  description={element.description ? element.description : " "}
                  imgUrl={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
