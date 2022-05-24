import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ITEMS, PATH_ACCOUNT, PATH_ADD_WINE, PATH_ALL_ORDERS, PATH_CART, PATH_LOGIN, PATH_SIGN_IN, PATH_WINES } from './config/route-config';
import Wines from './components/pages/Wines';
import AddWine from './components/pages/AddWine';
import Cart from './components/pages/Cart';
import Account from './components/pages/Account';
import Login from './components/pages/Login';
import SignIn from './components/pages/SignIn';
import AllOrders from './components/pages/AllOrders';
import Navigator from './components/common/NavigatorResponcive';
import WineItem from './models/WineItem';
import UserData from './models/UserData';
import { shop } from './config/wine-config';
import { winesSet } from './redux/actions';
import { winesSelector } from './redux/store';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { typography } from '@material-ui/system';
import usePollerRedux from './util/usePollerRedux';

const App: React.FC = () => {
  const theme = createTheme({
    typography: {
      body1: {
        fontWeight: 'bold',
      }
    },
    spacing: 4
  })
  const wines: WineItem[] | null = usePollerRedux<WineItem[] | null>(shop, shop.getAllItems, winesSet, winesSelector)

  //const userData = usePollerRedux<UserData>(authService, authService.get, userSet, userSelector);
  return (
    <><ThemeProvider theme={theme} children={undefined}></ThemeProvider>
      <BrowserRouter>
        <div><Navigator items={ITEMS}></Navigator><Navigate to={PATH_WINES}></Navigate></div>
        <Routes>
          <Route path={PATH_WINES} element={<Wines />} />
          <Route path={PATH_ADD_WINE} element={<AddWine />} />
          <Route path={PATH_CART} element={<Cart />} />
          <Route path={PATH_ACCOUNT} element={<Account />} />
          <Route path={PATH_LOGIN} element={<Login />} />
          <Route path={PATH_SIGN_IN} element={<SignIn />} />
          <Route path={PATH_ALL_ORDERS} element={<AllOrders />} />
        </Routes>
      </BrowserRouter></>
  )
}
export default App



