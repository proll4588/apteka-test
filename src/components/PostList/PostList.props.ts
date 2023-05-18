import { IPost } from '../../interfaces/post.interface'

export default interface PostListProps {
    posts: IPost[]

    onFavChange?: (id: number, fav: boolean) => void
}
