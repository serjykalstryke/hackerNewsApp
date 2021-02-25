import React, { Component } from "react";
import API from "./utils/API";
import Results from "./components/Results";
import { Col, Row, Container } from "./components/Grid";
import { List, ListItem } from "./components/List";
import { Form, Input, FormBtn } from "./components/Form";
import "./App.css";

class App extends Component {
  state = {
    news: [],
    title: "",
  };

  // ``` input news title in search bar
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  // ``` submit the search button
  searchBtnSubmit = (event) => {
    event.preventDefault();
    if (this.state.title) {
      API.searchNews(this.state.title)
        .then((res) => {
          this.setState({ news: res.data.hits });
          console.log(this.state.news[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Form>
              <div className="row">
                <div className="title">
                  <br />
                  <h2>
                    Hacker News <i className="fas fa-newspaper"></i>
                  </h2>
                  <p className="name">By David Stinnett</p>
                </div>
              </div>
              <br />

              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Search News Title"
              />
              <p></p>
              <FormBtn onClick={this.searchBtnSubmit} />
            </Form>
          </Col>
        </Row>

        {/* ``` show the search results ``` */}
        <Row>
          <Col size="sm-12">
            <Results>
              {this.state.news.length ? (
                <List>
                  {this.state.news.map((news) => (
                    <ListItem key={news.objectID} children={news}>
                      <a
                        href={news.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <h3>{news.title}</h3>
                      </a>{" "}
                      {news.created_at ? (
                        <h6 className="rating">
                          Published Date: {news.created_at}
                        </h6>
                      ) : (
                        console.log(" no date ")
                      )}
                      {news.author ? (
                        <h6 className="rating">Author: {news.author}</h6>
                      ) : (
                        console.log(" no author")
                      )}
                    </ListItem>
                  ))}
                </List>
              ) : (
                <div>
                  <h3 className="text-center">No Results to Display</h3>
                </div>
              )}
            </Results>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
