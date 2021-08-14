import React, { useEffect, useState } from 'react'
import { TweetBox } from './../tweetbox/Tweetbox.component'
import { Post } from './../post/Post.component'

import db from './../../config/firebase'

import './Feeds.style.css'

const Feeds = () => {


    const [posts, setPost] = useState([]);

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPost(snapshot.docs.map(doc => doc.data()))
        ))
    }, {});

        return (
            <div className="feeds">
                {/* Header */}
                <div className="feed-header">
                    <h2>Accueil</h2>
                </div>
    
                {/* Formuaire Tweet */}
                <TweetBox />

                {
                    posts.map(post => (
                        <Post 
                            displayName={post.displayName}
                            username={post.username}
                            verified={post.verified}
                            text={post.text}
                            post_image={post.image}
                            avatar={post.image} 
                        />
                    ))
                }
                
                
            </div>
        )
}

export default Feeds
