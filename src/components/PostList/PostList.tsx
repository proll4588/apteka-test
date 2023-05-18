import { FC } from 'react'
import PostListProps from './PostList.props'
import Post from '../Post/Post'
import './PostList.css'

const PostList: FC<PostListProps> = ({ posts, onFavChange, favorites }) => {
    return (
        <div className='PostList'>
            <div className='PostList__container'>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        body={post.body}
                        title={post.title}
                        isFav={
                            favorites.find((el) => el.id === post.id) !==
                            undefined
                        }
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
