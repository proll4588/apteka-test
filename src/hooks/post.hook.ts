import { useEffect, useState } from 'react'
import { IPost } from '../interfaces/post.interface'
import useHttp from './http.hook'

const PORT = process.env.REACT_APP_SERVER_PORT || 3004

const usePost = () => {
    const { request, loading } = useHttp()
    const [posts, setPosts] = useState<IPost[]>([])

    // Получение всех постов
    const getAllPosts = async () => {
        try {
            const res = await request(`http://localhost:${PORT}/posts`)
            setPosts(res)
        } catch (error) {
            alert(error)
        }
    }

    // Получение постов с заданным поиском
    const searchPost = async (search: string) => {
        try {
            const res = await request(
                `http://localhost:${PORT}/posts?q=${search}`
            )
            setPosts(res)
        } catch (error) {
            alert(error)
        }
    }

    // Изменение состояния избранности поста
    const changeFav = async (id: number, newFav: boolean) => {
        try {
            const res = await request(
                `http://localhost:${PORT}/posts/${id}`,
                'PATCH',
                {
                    isFav: newFav,
                }
            )

            // При получении изменённого поста, находим старый среди имеющихся
            // и заменяем его на новый
            setPosts((prev) =>
                prev.map((post) => (post.id === res.id ? res : post))
            )
        } catch (error) {
            alert(error)
        }
    }

    // При первой загрузке получаем все посты
    useEffect(() => {
        getAllPosts()
    }, [])

    return { posts, getAllPosts, loading, searchPost, changeFav }
}

export default usePost
