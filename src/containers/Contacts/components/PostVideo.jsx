import React from 'react'
import "./styles/PostVideo.css"
import {DefaultPlayer as Video} from 'react-html5video';
import "../../../../node_modules/react-html5video/dist/styles.css"
import introVideo from "../videos/bg-video.mp4"
const PostVideo = () => {
  return (
    <div className='postVideo-contaier'>
        <div className="postVideo-left">
          <Video autoPlay loop className="Video">
            <source src={introVideo} type='video/webm' />
          </Video>
        </div>
        <div className="postVideo-right">
                <div className="postVideo-title">
                    <h1>Why We Need Your Contacts ?</h1>
                </div>
                <div className="postVideo-p">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut adipisci vel minus sit velit odio vero modi expedita deserunt debitis.</p>
                </div>
        </div>
    </div>
  )
}

export default PostVideo