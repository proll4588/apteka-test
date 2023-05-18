import './App.css'
import Search from './components/Search/Search'
import PostList from './components/PostList/PostList'
import usePost from './hooks/post.hook'
import { useEffect } from 'react'

const App = () => {
    const { favorites, posts, searchPost, changeFav } = usePost()

    useEffect(() => {
        console.log('favorites >> ', favorites)
        console.log('posts >> ', posts)
    }, [])

    return (
        <div className='App'>
            <div className='App__container'>
                <Search onChange={searchPost} />
                <PostList
                    posts={posts}
                    favorites={favorites}
                    onFavChange={changeFav}
                />
            </div>
        </div>
    )
}

export default App
