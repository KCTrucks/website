import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Button,
  Drawer,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Assets
import KCTrucksLogo from '../images/logos/KCTrucks.png';
import KCLogo from '../images/logos/KC.png';

const LINKS = [
  {
    slug: '/',
    text: 'Home'
  },
  {
    slug: '/about-us',
    text: 'About Us'
  },
  {
    slug: '/services',
    text: 'Our Services'
  },
  {
    slug: '/products',
    text: 'Our Products'
  },
  {
    slug: '/bed-liner',
    text: 'Spray On Bed Liner'
  },
  {
    slug: '/contact-us',
    text: 'Contact Us'
  },
];

const useStyles = makeStyles(theme => ({
  button: {
    textAlign: 'center',
    fontSize: '14px',
    color: theme.palette.secondary.dark
  },
  selectedButton: {
    textAlign: 'center',
    fontSize: '14px',
    color: theme.palette.primary.main
  }
}));

export default function AppToolBar() {
  const classes = useStyles();
  let location = useLocation();
  const [linkMenuanchorEl, setLinkMenuAnchorEl] = useState(null);
  const [isSidePanelOpen, setSidePanelOpen] = useState(false);

  const handleLinkMenuClick = (event) => {
    setLinkMenuAnchorEl(event.currentTarget);
  };

  const handleLinkMenuClose = () => {
    setLinkMenuAnchorEl(null);
  };

  const toggleSideMenu = () => {
    setSidePanelOpen(!isSidePanelOpen);
  }

  return (
    <AppBar color='transparent' position='static'>
      <Toolbar>

        {/* --- LOGO --- */}
        <div style={{ flex: 1 }}>
          <Link to='/'>
            <img
              width={200}
              mode={'fill'}
              src={KCTrucksLogo}
              alt={'Logo'}
              style={{ marginTop: '5px' }}
            />
          </Link>
        </div>

        {/* --- MOBILE VIEW --- */}
        <Hidden lgUp>
          <div style={{ flex: 1, textAlign: 'right' }}>
            <IconButton
              aria-controls='nav-menu'
              aria-haspopup='true'
              onClick={toggleSideMenu}>
              <MenuIcon />
            </IconButton>
          </div>

          <Drawer anchor={'right'} open={isSidePanelOpen} onClose={toggleSideMenu}>
            <SideMenu toggle={toggleSideMenu} />
          </Drawer>
        </Hidden>

        {/* --- FULL SCREEN VIEW --- */}
        <Hidden mdDown>
          <div style={{ flex: 3, display: 'flex', justifyContent: 'flex-end' }}>
            {LINKS.map((link, index) =>
              <div key={index}>
                <Button
                  className={ isSelected(location.pathname, link.slug) ? classes.selectedButton : classes.button }
                  href={link.subLinks ? null : link.slug}
                  style={{ marginLeft: '10px' }}
                  aria-haspopup={link.subLinks ? 'true' : 'false'} onClick={link.subLinks ? handleLinkMenuClick : null}>{link.text}</Button>

                  {link.subLinks &&
                  <Menu
                    id="simple-menu"
                    anchorEl={linkMenuanchorEl}
                    keepMounted
                    open={Boolean(linkMenuanchorEl)}
                    onClose={handleLinkMenuClose}
                  >
                    {link.subLinks.map((subLink, subLinkIndex) =>
                      <MenuItem key={subLinkIndex} component='button' onClick={handleLinkMenuClose} href={link.slug + subLink.slug} style={{ fontSize: '14px' }}>
                        {subLink.text}
                      </MenuItem>
                    )}
                  </Menu>}
              </div>
            )}
          </div>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

function SideMenu({ toggle }) {
  const [linkMenuanchorEl, setLinkMenuAnchorEl] = useState(null);

  const handleLinkMenuClick = (event) => {
    setLinkMenuAnchorEl(event.currentTarget);
  };

  const handleLinkMenuClose = () => {
    setLinkMenuAnchorEl(null);
  };

  return (
    <div
      role='presentation'
      onKeyDown={toggle}
      style={{ width: '250px' }}
    >
      <List>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <img
            mode={'contain'}
            src={KCLogo}
            alt={'Logo'}
            style={{ width: 100, height: 100, marginTop: '15px', marginBottom: '15px' }}
          />
        </div>
        {LINKS.map((link, index) =>
          <div key={index}>
            <ListItem
              button
              component='button'
              href={link.subLinks ? null : link.slug}
              aria-haspopup={link.subLinks ? 'true' : 'false'}
              onClick={link.subLinks ? handleLinkMenuClick : toggle}
              style={{ marginRight: '40px' }}>
              <ListItemText primary={link.text} />
            </ListItem>

              {link.subLinks &&
              <Menu
                id="simple-menu"
                anchorEl={linkMenuanchorEl}
                keepMounted
                open={Boolean(linkMenuanchorEl)}
                onClose={handleLinkMenuClose}
              >
                {link.subLinks.map((subLink, subLinkIndex) =>
                  <MenuItem key={subLinkIndex} component='button' onClick={handleLinkMenuClose} href={link.slug + subLink.slug} style={{ fontSize: '14px' }}>
                    {subLink.text}
                  </MenuItem>
                )}
              </Menu>}
          </div>
        )}
      </List>
    </div>
  );
}

function isSelected(currentPathname, slug) {
  return currentPathname === '/' && slug === '/' ? true : currentPathname.includes(slug) && slug !== '/';
}
