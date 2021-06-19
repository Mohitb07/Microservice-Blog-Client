import PostCreation from "./PostCreation"
import PostList from './PostList'

export default () => {
    return (
        <div className="container">
            <h1>Create Posts</h1>
            <PostCreation/>
            <hr/>
            <h1>Posts</h1>
            <PostList/>
        </div>
    )
}