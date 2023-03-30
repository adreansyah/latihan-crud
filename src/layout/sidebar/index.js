import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const SideBar = () => {
    return (
        <Sidebar backgroundColor='white' className='sidebar-nav'>
            <div className='cms-logo mx-4 my-2'>
                CMS
            </div>
            <Menu>
                <SubMenu label="Dashboard">
                    <MenuItem> Dashboard </MenuItem>
                </SubMenu>
                <SubMenu label="Cars">
                    <MenuItem> List Cars </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}

export default SideBar