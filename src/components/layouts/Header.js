import React, {useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import '../../Header.css';


function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
            <MenuIcon/>
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png"
            alt=""/>
            </div>
            <div className="header__input">
            <input value={inputSearch} onChange={e => setInputSearch(e.target.value)} placeholder="Search" type="text"/>
            <Link to={`/search/${inputSearch}`}>
            <SearchIcon className="header__inputButton"/>
            </Link>
            </div>
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
            alt="Grace Birindwa"
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/220px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
            />
            </div>
           
            
          
        </div>
    )
}

export default Header
