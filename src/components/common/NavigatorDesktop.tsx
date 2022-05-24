import React, {useState} from 'react';
import {AppBar, Tabs, Tab, Icon} from '@material-ui/core';
import {Link} from 'react-router-dom';
import  ActionItem  from '../../models/ActionItem';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


type Props = {
    items: ActionItem[]
}
const Navigator: React.FC<Props> = (props) => {
    const [tabNumber, setTabNumber] = useState(0);
    
    const {items} = props;


    function tabNumberChange(event: any, newTabNumber: number) {
        setTabNumber(newTabNumber);
    }
    function getTabs(): React.ReactNode[] {
        return items.map((item, index) => <Tab key={index} 
        component={Link} icon={item.icon && getIcon(item)as any} to={item.path} label={item.icon ? "" : item.label}></Tab>)
    }
    function getIcon(item: ActionItem){
        const doc = document.createElement('ShoppingCartIcon');
        console.log(doc);
        return doc;
    }


    return <div>
    <AppBar position={'static'}>
        <Tabs value={tabNumber} onChange={tabNumberChange}>
            {getTabs()}
        </Tabs> 
    </AppBar>
  </div>
}
export default Navigator;

