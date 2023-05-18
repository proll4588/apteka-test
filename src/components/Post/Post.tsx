import { FC } from 'react'
import PostProps from './Post.props'
import { MdOutlineFavorite } from 'react-icons/md'
import classNames from 'classnames'
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
                <MdOutlineFavorite
                    className={classNames(
                        'Post__fav',
                        isFav ? 'Post__fav_check' : ''
                    )}
                />
            </div>
        </div>
    )
}

export default Post
