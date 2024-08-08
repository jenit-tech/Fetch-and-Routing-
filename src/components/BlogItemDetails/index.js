// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: [],
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogData: updatedData})
  }

  renderBlogItemDetails = () => {
    const {blogData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogData

    return (
      <div className="blogItemDetails-info">
        <h1 className="blogItemDetails-title">{title}</h1>
        <div className="blogItemDetails-card">
          <img
            className="blogItemDetails-avatarUrl"
            src={avatarUrl}
            alt={author}
          />
          <p className="blogItemDetails-author">{author}</p>
        </div>
        <img className="blogItemDetails-imageUrl" src={imageUrl} alt={title} />
        <p className="blogItemDetails-content">{content}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="blogItemDetails-container">
        {this.renderBlogItemDetails()}
      </div>
    )
  }
}

export default BlogItemDetails
