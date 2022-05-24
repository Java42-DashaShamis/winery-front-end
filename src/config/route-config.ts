
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ActionItem from '../models/ActionItem';

export const PATH_WINES = '/wines';
export const PATH_ADD_WINE = '/wines/add';
export const PATH_STATISTICS = '/statistics';
//export const PATH_GRAPE_STATISTICS = '/statistics/grape';
//export const PATH_PLACE_STATISTICS = '/statistics/place';
export const PATH_CART = '/wines/cart';
export const PATH_ACCOUNT = '/wines/account';
export const PATH_LOGIN  = '/wines/login';
//export const PATH_LOGOUT = '/wines/logout';
export const PATH_SIGN_IN = '/wines/signin';
//export const PATH_ORDER = '/wines/account/order';
export const PATH_ALL_ORDERS = '/wines/orders';

export const ITEMS: ActionItem[] = [
    {path: PATH_WINES, label: 'Our Wines'},
    {path: PATH_ADD_WINE, label: 'Add new Wine', isAdmin: true},
    {path: PATH_STATISTICS, label: 'Intresting Information'},
    {path: PATH_CART, label: 'My Cart', isAdmin: false},
    {path: PATH_ACCOUNT, label: 'My Account', isAdmin: false, isLogedIn: true},
    {path: PATH_LOGIN, label: 'Login'},
    {path: PATH_SIGN_IN, label: 'Sign In'},
    //{path: PATH_ORDER, label: 'Order', isAdmin: false, isLogedIn: true},
    {path: PATH_ALL_ORDERS, label: 'Orders', isAdmin: true}
]