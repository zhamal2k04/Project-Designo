import React from 'react'
import MyButton from './UI/button/MyButton'
import "./styles/PostItem.css";

const PostItem = (props) => {
    return (
        <div className="post-container">
            <div className="post">
                <div className="post__content">

                    <div className="post__title">
                        <strong>{props.number}. </strong>{props.post.title}
                    </div>

                    <div className='post__body'>
                        <span>{props.post.body}</span>
                    </div>

                    <div className="post__phone">
                        <span>{props.post.phone}</span>
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem