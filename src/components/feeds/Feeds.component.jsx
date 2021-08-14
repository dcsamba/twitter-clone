import React from 'react'
import { TweetBox } from './../tweetbox/Tweetbox.component'
import { Post } from './../post/Post.component'

import './Feeds.style.css'

const Feeds = () => {
    return (
        <div className="feeds">
            {/* Header */}
            <div className="feed-header">
                <h2>Accueil</h2>
            </div>

            {/* Formuaire Tweet */}
            <TweetBox />

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feeds
