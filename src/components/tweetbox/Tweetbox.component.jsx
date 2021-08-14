import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import samba from './../../samba.JPG'


import './Tweetbox.style.css'

export const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src={samba} />
                    <input type="text" placeholder="Quoi de neuf ?" />
                </div>
                <input className="tweetBox__inputImage" type="text" placeholder="Url de votre image" />
                <Button className="tweetBox__button" >Tweeter</Button>
            </form>
        </div>
    )
}

