import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from '../sidebar-option/Sidebar-option.component'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ListAltIcon from '@material-ui/icons/ListAlt';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button } from '@material-ui/core'

import './Sidebar.style.css'

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Logo Twitter */}
            <TwitterIcon className="twitter-logo" />

            {/* Option Menu */}
            <SidebarOption active Icon={HomeIcon} text="Accueil" />
            <SidebarOption Icon={SearchIcon} text="Actualité" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlineIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltIcon} text="Mes Tweets" />
            <SidebarOption Icon={PermIdentityIcon} text="Profil" />
            <SidebarOption Icon={MoreHorizIcon} text="Plus" />        

            {/* Boutton Twitter */}
            <Button variant="outlined" className="sidebar-tweet" fullWidth >Tweeter</Button>
        </div>
    )
}

export default Sidebar;

