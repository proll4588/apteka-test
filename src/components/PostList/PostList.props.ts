import { IFavorite } from '../../interfaces/favorite.interface'
import { IPost } from '../../interfaces/post.interface'

export default interface PostListProps {
    posts: IPost[]
    favorites: IFavorite[]

    onFavChange?: (id: number, fav: boolean) => void
}
