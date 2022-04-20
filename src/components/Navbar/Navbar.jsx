import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg" alt="Netflix Logo" />
                <span>Homepage</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon' />
                <span>KID</span>
                <Notifications className='icon' />
                <img src="https://robinwinters.netlify.app/static/media/profile.0870be4e2eb304815e70.png" alt="profile image" />
                <div className="profile">
                    <ArrowDropDown className='icon' />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar