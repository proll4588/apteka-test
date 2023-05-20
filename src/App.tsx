import './App.css'
import Search from './components/Search/Search'
import PostList from './components/PostList/PostList'
import usePost from './hooks/post.hook'
import { useEffect, useState } from 'react'
import useDebounce from './hooks/debounce.hook'

const App = () => {
    const { favorites, posts, searchPost, changeFav } = usePost()
    const [search, setSearch] = useState<string>('')
    const deb = useDebounce(search)

    useEffect(() => {
        searchPost(deb)
    }, [deb])

    return (
        <div className='App'>
            <div className='App__container'>
                <Search
                    onChange={setSearch}
                    value={search}
                />
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
