import React from 'react'
import { 
    TwitterTimelineEmbed, 
    TwitterShareButton, 
    TwitterTweetEmbed 
} from 'react-twitter-embed';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

import './Widgets.style.css'

const Widgets = () => {
    return (
        <div className="widgets">
            {/* <h1>Widgets</h1> */}
            <div className="widgets_input">
                <SearchRoundedIcon className="widgets__searchIcon" />
                <input type="text" placeholder="Rechercher un tweet" />
            </div>
            <div className="widgets__container">
                <h2>Quoid de neuf ?</h2>

                <TwitterTweetEmbed tweetId={'933354946111705097'} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="dcsamba"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/douc.samba"}
                    option={{ text: "#samba, cool ton clone de twitter avec ReactJS", via: "dcsamba" }}
                />
            </div>

        </div>
    )
}

export default Widgets
