import React from 'react';
import ArticleItem from './ArticleItem';
import styleArticle from "../styles/Article.module.css"

const ArticleList = ({articles}) => {
  return (
    <div className={styleArticle.grid}>
      {articles.map((article) =>(
          <ArticleItem article ={article} />
        ))}
    </div>
  )
}

export default ArticleList;
