import React from 'react'
import { useState } from 'react'
import MyButton from '../components/UI/button/MyButton';
import MyInput from '../components/UI/input/MyInput';
import "../components/styles/PostForm.css";
const PostForm = ({ create }) => {

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({ title: '', body: '', phone: '' })
    }

    const [post, setPost] = useState({ title: '', body: '', phone: '' })

    return (
        <div className='postForm-container'>
            <form className='form-contacts'>
                <div className="form-left-container">
                    <div className="form-textPosition">
                        <h1>Contact Us</h1>
                        <p>Ready to take it to the next level? Let's talk about your project or <br />idea and find out how we can help your business grow. If you are <br />looking for unique digital experiences that's relatable to your <br /> users, drop us a line.</p>
                    </div>
                </div>
                <div className="form-right-container">
                    <MyInput value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder='Name' />
                    <MyInput value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder='Email Address' />
                    <MyInput value={post.phone} onChange={e => setPost({ ...post, phone: e.target.value })} type="text" placeholder='Phone Number' />
                    <MyButton onClick={addNewPost}>Submit</MyButton>
                </div>
            </form>

        </div>
    )
}

export default PostForm