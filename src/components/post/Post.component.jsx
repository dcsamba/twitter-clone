import { Avatar } from '@material-ui/core'
import VerifiedUserRoundedIcon from '@material-ui/icons/VerifiedUserRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import React from 'react'
import samba from './../../samba.JPG'
import post_image from './../../post_image.jpeg'

import './Post.style.css'
import { ChatBubbleOutline } from '@material-ui/icons';

export const Post = ({ displayName, username, verified, timestamp, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={samba} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            DC Samba
                            <span className="post__username">
                                <VerifiedUserRoundedIcon className="post__badge" /> @dcsamba
                            </span>
                            
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>
                            Salut ! je suis Samba je suis un développeur React JS
                        </p>
                    </div>
                </div>
                <img src={post_image} alt="Post" />
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

