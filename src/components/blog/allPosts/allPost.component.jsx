import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./allPost.styles.css";

import sanityClient from "../../../client";
import Loading from "../../loading/loading"

export default function AllPosts() {
  const [allPostsData, setAllPostsData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPostsData(data))
      .catch(console.error);
  }, []);

  if (!allPostsData)
    return (
      <div>
        <Loading />
      </div>
    );

  console.log(allPostsData);

  return (
    <div className="allPosts">
      <h1 className="allPost__mainHeader">Welcome to BerryBlog</h1>
      <h3 className="allPost__secHeader">
        We serve fresh techy content DAILY!!!
      </h3>

      <div className="allPost__content">
        {allPostsData &&
          allPostsData.map((post, index) => (
            <div>
              <img
                className="allPost__content--img"
                src={post.mainImage.asset.url}
                alt=""
              />
              <Link to={"/blog/" + post.slug.current} key={post.slug.current}>
                <span key={index}>
                  <span>
                    <span className="allPost__content--span">Read Now</span>
                    <h2 className="allPost__content--title">{post.title}</h2>
                  </span>
                </span>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}
