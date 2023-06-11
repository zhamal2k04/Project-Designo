import { React, useState, useEffect, useRef } from 'react';
import "../styles/mainStyle.css";
import PostForm from '../components/PostForm';
import PostItem from '../components/PostItem';
import PostList from '../components/PostList';
import PostVideo from '../components/PostVideo';
const ContactPage = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Mark Ruffalo', body: 'johndoe2211@gmail.com', phone: "+33757005467" },
        { id: 2, title: 'Shelby Goode', body: 'shelbygoode41@gmail.com', phone: '+33757005467' },
        { id: 3, title: 'Robert Bacins', body: 'robertbacins4182@.com', phone: '+33757005467' }
    ])


    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }


    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className='contactPage-container'>
            <PostForm create={createPost} />
            {posts.length !== 0

                ? <PostList remove={removePost} posts={posts} title={"Users Contacts"} />

                : <h1 style={{ textAlign: 'center', color: '#333136', fontSize: '30px', fontWeight: '500', letterSpacing: '5px' }}>
                    Cannot Reach Posts
                </h1>
            }
            <PostVideo/>
        </div>
    )
}

export default ContactPage;