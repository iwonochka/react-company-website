import React from 'react'
import './article.css'

const Article = ({imgUrl, date, title, text}) => {

  return (
    <div className='blog-container_article'>
      <div className='blog-container_article-image'>
        <img src={imgUrl} alt="article" />
      </div>
      <div className='blog-container_article-content'>
        <p className='blog-container_article-content-bold'>{date}</p>
        <h3>{title}</h3>
        <p className='blog-container_article-content-text'>{text}</p>
        <p className='blog-container_article-content-bold'>Read more</p>
      </div>
    </div>
  )
}

export default Article
