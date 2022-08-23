import React from 'react'
import Article from '../../components/article/Article';
import {blog01, blog02, blog03, blog04, blog05} from './imports'
import './blog.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Blog = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='blog section__padding' id='blog'>
      <div className='blog-header'>
        <h1 className='gradient__text' data-aos="fade-down" data-aos-duration="600" data-aos-delay="200" >Industry Insights</h1>
      </div>
      <div className='blog-container'>
        <div className='blog-container_groupA'>
          <Article imgUrl={blog01} date="Sep 22, 2022" title="Half a million new pieces of malware daily" text="It’s imperative that both individuals and companies make malware awareness, prevention, and security their number one priority. By doing this, they can protect themselves from malware. Recently, more and more news has surfaced about millions of consumers becoming affected by data breaches." />
        </div>
        <div className='blog-container_groupB'>
          <Article id='article-02' imgUrl={blog02} date="Sep 22, 2022" title="IT Security Act 2.0 - overview" />
          <Article imgUrl={blog03} date="Sep 22, 2022" title="Docker container security best practices"/>
          <Article imgUrl={blog04} date="Sep 22, 2022" title="Why does SSE matter now?" />
          <Article imgUrl={blog05} date="Sep 22, 2022" title="Fixing security vulnerabilities" />
        </div>
      </div>
    </div>
  )
}

export default Blog
