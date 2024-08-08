// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem
  return (
    <Link to={`/blogs/${id}`} className="blogItem-link">
      <div className="blogItem-container">
        <img src={imageUrl} alt="" className="blogItem-image-one" />
        <div className="blogItem-card-one">
          <p className="blogItem-topic">{topic}</p>
          <h1 className="blogItem-title">{title}</h1>
          <div className="blogItem-card-two">
            <img src={avatarUrl} alt="" className="blogItem-image-two" />
            <p className="blogItem-author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
