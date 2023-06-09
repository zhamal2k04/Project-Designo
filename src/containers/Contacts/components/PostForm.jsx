import React from 'react'
import { useState } from 'react'
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
const PostForm = ({ create }) => {

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    const [post, setPost] = useState({ title: '', body: '' })

    return (
        <div>
            <form>
                <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder='Name Post' />
                <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder='Description Post' />
                <MyButton onClick={addNewPost}>Create Post</MyButton>
            </form>

        </div>
    )
}

export default PostForm