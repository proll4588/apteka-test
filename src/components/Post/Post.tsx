import { FC } from 'react'
import PostProps from './Post.props'
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon'
import './Post.css'

const Post: FC<PostProps> = ({ title, body, isFav, onClick }) => {
    const clickHandler = () => {
        onClick && onClick(!isFav)
    }

    return (
        <div
            className='Post'
            onClick={clickHandler}
        >
            <div className='Post__container'>
                <h4 className='Post__title'>{title}</h4>
                <p className='Post__body'>{body}</p>
                <FavoriteIcon
                    isActive={isFav}
                    className='Post__fav'
                />
            </div>
        </div>
    )
}

export default Post
