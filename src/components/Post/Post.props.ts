export default interface PostProps {
    title: string
    body: string
    isFav: boolean

    onClick?: (fav: boolean) => void
}
