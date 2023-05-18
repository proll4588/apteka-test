import { FC } from 'react'
import PostListProps from './PostList.props'
import Post from '../Post/Post'
import './PostList.css'

const PostList: FC<PostListProps> = ({ posts, onFavChange }) => {
    return (
        <div className='PostList'>
            <div className='PostList__container'>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        body={post.body}
                        title={post.title}
                        isFav={post.isFav}
                        onClick={(fav) => {
                            onFavChange && onFavChange(post.id, fav)
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default PostList
