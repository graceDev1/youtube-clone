import React from 'react'
import '../../Sidebar.css';
import SideRow from './SideRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ExpandeMoreOutLinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import WatchLaterIcon from '@material-ui/icons/WatchLater';



function Sidebar() {
    return (
        <div className="sidebar">
            <SideRow selected Icon={HomeIcon}  title="Home"/>
            <SideRow Icon={WhatshotIcon}  title="Trending"/>
            <SideRow Icon={SubscriptionsIcon} title="Subscription"/>
            <hr/>
            <SideRow Icon={VideoLibraryIcon}  title="Library"/>
            <SideRow Icon={HistoryIcon}  title="History"/>
            <SideRow Icon={OndemandVideoIcon} title="Your videos"/>
            <SideRow Icon={WatchLaterIcon}  title="Watch later"/>
            <SideRow Icon={ThumbUpAltOutlinedIcon}  title="Liked videos"/>
            <SideRow Icon={ExpandeMoreOutLinedIcon} title="Show more"/>
            <hr/>
        </div>
    )
}

export default Sidebar
