import React from 'react'
import PostItem from './PostItem'
const PostList = ({ posts, title, remove }) => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', color:'#333136', fontSize:'30px', fontWeight:'500', letterSpacing:'5px', marginTop:'2.2rem'}}>{title}</h1>
            {posts.map((post, index) =>
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}

export default PostList;