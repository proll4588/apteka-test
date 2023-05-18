import { useEffect, useState } from 'react'
import { IPost } from '../interfaces/post.interface'
import useHttp from './http.hook'
import { IFavorite } from '../interfaces/favorite.interface'

const PORT = process.env.REACT_APP_SERVER_PORT || 3004

const usePost = () => {
    const { request, loading } = useHttp()
    const [posts, setPosts] = useState<IPost[]>([])
    const [favorites, setFavorites] = useState<IFavorite[]>([])

    // Получение всех постов
    const getAllPosts = async () => {
        try {
            const res = await request(`http://localhost:${PORT}/posts`)
            setPosts(res)
        } catch (error) {
            alert(error)
        }
    }

    // Получение id всех избранных постов
    const getFavorites = async () => {
        try {
            const res = await request(`http://localhost:${PORT}/favorites`)

            setFavorites(res)
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

    // Добавление в избранное
    const addFavorite = async (id: number) => {
        try {
            await request(`http://localhost:${PORT}/favorites`, 'POST', {
                id: id,
            })

            setFavorites((prev) => [...prev, { id: id }])
        } catch (error) {
            alert(error)
        }
    }

    // Удаление из избранного
    const removeFavorite = async (id: number) => {
        try {
            await request(`http://localhost:${PORT}/favorites/${id}`, 'DELETE')

            setFavorites((prev) => prev.filter((el) => el.id !== id))
        } catch (error) {
            alert(error)
        }
    }

    // Изменение состояния избранности поста
    const changeFav = async (id: number, newFav: boolean) => {
        newFav ? addFavorite(id) : removeFavorite(id)
    }

    // При первой загрузке получаем все посты
    useEffect(() => {
        getAllPosts()
        getFavorites()
    }, [])

    return { favorites, posts, getAllPosts, loading, searchPost, changeFav }
}

export default usePost
