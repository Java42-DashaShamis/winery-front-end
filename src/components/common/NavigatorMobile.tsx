import React, { useState } from "react";
import { IconButton, Toolbar, MenuItem, Drawer, Link, AppBar, Typography, Tab } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Menu } from "@material-ui/icons/";
import { makeStyles } from "@material-ui/core/styles";
import  ActionItem  from "../../models/ActionItem";

type Props = {
    items: ActionItem[],
    name?: string
}
const useStyles = makeStyles(theme => ({
    menu: {
        color: 'white'
    }

}))
const NavigatorMobile: React.FC<Props> = (props) => {

    const { items, name } = props;
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const handleDrawerOpen = () =>
        setDrawerOpen(true);
    const handleDrawerClose = () =>
        setDrawerOpen(false);
    const getDrawerChoices = () => {
        return props.items.map(item => {
            return <Link component={RouterLink} to={item.path} key={item.label} >
                <MenuItem onClick={handleDrawerClose}>{item.label}</MenuItem>
            </Link>
        });
    }

    return (
        <AppBar position={'static'}  >
            <Toolbar>
                <IconButton onClick={handleDrawerOpen}>
                    <Menu className={classes.menu} />
                </IconButton>

                <Drawer anchor={"left"} open={drawerOpen} onClose={handleDrawerClose}>
                    <div >{getDrawerChoices()}</div>
                </Drawer>

                <Typography >
                    {name || items[0].label} 
                </Typography>

            </Toolbar>
        </AppBar>
    );
};

export default NavigatorMobile;