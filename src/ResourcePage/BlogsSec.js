import React from "react";
import thumbnail from './../Images/thumbnail.jpeg';

export default function BlogSection() {
  return (
    <div className="SecCont blogCont">
      <div className="SectionHeader blogheader">Blogs</div>
      <div className="ContentSection">
        <BlogBox cont={thumbnail} blogTitle="This is title of first blog" />
        <BlogBox cont={thumbnail} blogTitle="This is title of second blog" />
        <BlogBox cont={thumbnail} blogTitle="This is title of third blog" />
        <BlogBox cont={thumbnail} blogTitle="This is title of fourth blog" />
        </div>
    </div>
  );
}

function BlogBox(props) {
  return (
    <div className="contentBox">
      <img src={props.cont} className="blogthumb" alt="thumbnail"/>
      <div className="DescriptText">{props.blogTitle}</div>
    </div>
  );
}
