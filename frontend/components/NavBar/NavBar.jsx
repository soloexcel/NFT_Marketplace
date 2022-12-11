import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdNotifications} from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';
import { CgMenuLeft, CgMenuRight } from 'react-icons/cg'; 

// import internal style
import Style from './NavBar.module.css';
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index';
import { Button } from '../componentsIndex';
import images from '../../img';

const NavBar = () => {

  // useState components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [sideMenu, setSideMenu] = useState(false);

  const openMenu = (e)=> {
    const btnTxt = e.target.innerText;
    if (btnTxt == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnTxt == "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = ()=> {
    if(!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };


  const openSideBar = ()=> {
    if(!sideMenu) {
      setSideMenu(true);
    } else {
      setSideMenu(false);
    }
  };


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          {/* <div className={Style.logo}>
            <Image src={images.logo} alt="NFT MARKET PLACE." width={100} height={100}/>
          </div> */}
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search For NFT' />
              <span className={Style.searchRegion}><BsSearch onClick={() => {}} className={Style.search_icon}/></span>
            </div>
          </div>
        </div>
        
        {/* // Right section  */}
        <div className={Style.navbar_container_right}>
          {/* Discover Menu */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && ( 
            <div className={Style.navbar_container_right_discover_box}>
              <Discover/>
            </div>)}
          </div>

          {/* Help Center Menu */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className={Style.navbar_container_right_notification}>
            <MdNotifications className={Style.notification} onClick={() => openNotification()} />
                {notification && <Notification />}
          </div>

          {/* Create button section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnName="Create" handleClick = {()=> {}}/>
          </div>


          {/* User Profile */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} alt="Profile" width={40} height={40} onClick={() => openProfile()} className={Style.navbar_container_right_profile} />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()}/>
          </div>
        </div>

        </div> 

        {/* Sidebar */}
        {
          sideMenu && (
            <div className={Style.sideBar}>
              <SideBar setSideMenu={setSideMenu}/>
            </div>
          )
        }
      </div>
    );
};

export default NavBar;