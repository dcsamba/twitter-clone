import { Avatar } from '@material-ui/core'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import React from 'react'


import './Post.style.css'
import { ChatBubbleOutline } from '@material-ui/icons';

export const Post = ({ displayName, username, verified, text, post_image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}
                            <span className="post__username">
                                {verified && <VerifiedUserRoundedIcon className="post__badge" />}  {`@${username}`}
                            </span>
                            
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            {text}
                        </p>
                    </div>
                </div>
                {post_image && <img src={post_image} alt="Post" />} 
                <div className="post__footer">
                    <ChatBubbleOutline fontSize="small" />
                    <RepeatRoundedIcon fontSize="small" />
                    <FavoriteBorderRoundedIcon fontSize="small" />
                    <PublishRoundedIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

