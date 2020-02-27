import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export const Post = ({ articles, getData }) => {
  useEffect(() => {
    getData();
  });
  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>{article.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    articles: state.remoteArticles.slice(0, 10)
  };
};

export default connect(mapStateToProps, { getData })(Post);
