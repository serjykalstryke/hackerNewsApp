import React, { Component, useState } from "react";
import API from "./utils/API";
import Results from "./components/Results";
import Saved from "./components/Saved";
import { Col, Row, Container } from "./components/Grid";
import { List, ListItem } from "./components/List";
import { Form, Input, FormBtn } from "./components/Form";
import "./App.css";

import store from "./store";

function App() {
  const [search, setSearch] = useState();

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    store.dispatch({
      type: "SAVE_SEARCH",
      query: search,
    });

    API.searchNews(search).then((res) => {
      store.dispatch({
        type: "SEARCH_ARTICLE",
        results: res.data.hits,
      });
    });
  };

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
              name="search"
              onChange={onChange}
              type="text"
              placeholder="Search the news"
            />
            <p></p>
            <FormBtn onClick={submitForm} />
          </Form>
        </Col>
      </Row>

      <Row>
        <Col size="sm-12">
          <Saved />
        </Col>
      </Row>

      {/* ``` show the search results ``` */}
      <Row>
        <Col size="sm-12">
          <Results />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
