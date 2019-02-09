import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  TextField,
  Drawer,
  CssBaseline,
  Fab
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Map from "./HereMap";
import Logo4LS from '../static/logo_4ls.png'
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew"

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  appBarButton: {
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
            style={{backgroundColor: '#040403'}}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: open
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" className={classes.grow}>
            <img
                style={{
                    margin: '10px'
                }}
                src={Logo4LS}
                height="52px"
                width="180px"
                alt="4LS/GENETIX"
                href="http://www.4ls.pl"
                target="_top"
            />
        </Typography>
<Fab
variant="extended"
size="medium"
label="Wyloguj"
style= {{ backgroundColor: '#226cb5', color: 'white', marginLeft: 'auto', marginRight: '10px' }}
aria-label="Add"
className={classes.margin}
>
<PowerSettingsNew className={classes.extendedIcon} />
Wyloguj
</Fab>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
          <Typography width='auto' variant="h6" color="inherit" align="center" noWrap>
          Track&Trace
        </Typography>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <TextField label="szukaj trasy" />
          <Divider />
          <List>
            {["1. Trasa numer 454545/2019 Data załadunku : 29-02-2019 Kierowca: Janosik Jerzy Pojazd: ", "2. Trasa Numer 1231231/2019", "3. Trasa numer 3454353/2019"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <Map
            app_id="mq0VqR8WMgMrdznRWVTy"
            app_code="hxXhqt6ckoMAdFC-x9yyVA"
            lng="16.9434"
            lat="52.387532"
            zoom="8"
          />
        </main>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);
