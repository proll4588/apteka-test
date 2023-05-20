import React, { FC } from 'react'
import FavoriteIconProps from './FavoriteIcon.props'
import { MdOutlineFavorite } from 'react-icons/md'
import classNames from 'classnames'
import './FavoriteIcon.css'

const FavoriteIcon: FC<FavoriteIconProps> = ({ isActive, className }) => {
    return (
        <MdOutlineFavorite
            className={classNames(
                'FavoriteIcon',
                isActive ? 'FavoriteIcon_check' : '',
                className ? className : ''
            )}
        />
    )
}

export default FavoriteIcon
