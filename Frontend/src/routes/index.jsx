// All components mapping with path for internal routes

import { lazy } from 'react'
const ItemReport =lazy(()=> import('../features/Report/component/itemReport') ) 

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
// const Welcome = lazy(() => import('../pages/protected/Welcome'))
const Page404 = lazy(() => import('../pages/protected/404'))
// const Blank = lazy(() => import('../pages/protected/Blank'))
// const Charts = lazy(() => import('../pages/protected/Charts'))
// const Leads = lazy(() => import('../pages/protected/Leads'))
// const Integration = lazy(() => import('../pages/protected/Integration'))
// const Calendar = lazy(() => import('../pages/protected/Calendar'))
// const Team = lazy(() => import('../pages/protected/Team'))
// const Transactions = lazy(() => import('../pages/protected/Transactions'))
// const Bills = lazy(() => import('../pages/protected/Bills'))
const ProfileSettings = lazy(() => import('../pages/protected/ProfileSettings'))
// const GettingStarted = lazy(() => import('../pages/GettingStarted'))
// const DocFeatures = lazy(() => import('../pages/DocFeatures'))
// const DocComponents = lazy(() => import('../pages/DocComponents'))

//Inventory
const StocksList = lazy(() => import('../pages/protected/Inventory/Stocks/stocksLists'))
const AddStock = lazy(() => import('../pages/protected/Inventory/Stocks/addStock'))
const LowStocks = lazy(() => import('../pages/protected/Inventory/Stocks/lowStocksList'))
const ExpiredStocks = lazy(() => import('../pages/protected/Inventory/Stocks/expiredStocks'))

//Menu
const MenuList = lazy(()=>import('../pages/protected/Menu/Menu/menuList'))
const AddItem = lazy(()=>import('../pages/protected/Menu/Menu/addItem'))

////category
const CategoryList = lazy(() => import('../pages/protected/Menu/Category/categoryList'))
const AddCategory = lazy(() => import('../pages/protected/Menu/Category/addCategory'))


//Order
const OrderDetail =lazy(()=>import('../pages/protected/Order/orderDetail'))
const OrderList =lazy(()=>import('../pages/protected/Order/orderList'))
const PendingOrder =lazy(()=>import('../pages/protected/Order/pendingOrder'))
const ConfirmOrder =lazy(()=>import('../pages/protected/Order/confirmOrder'))
const DeliveredOrder =lazy(()=>import('../pages/protected/Order/deliveredOrder'))
const CanceledOrder =lazy(()=>import('../pages/protected/Order/canceledOrder'))
const RejectedOrder =lazy(()=>import('../pages/protected/Order/rejectedOrder'))



const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },



  //ORDER
  {
    path: '/order/:id',
    component: OrderDetail,
  },
  {
    path: '/order-list',
    component: OrderList,
  },
  {
    path: '/pending-list',
    component: PendingOrder,
  },
  {
    path: '/confirmed-list',
    component: ConfirmOrder,
  },
  {
    path: '/delivered-list',
    component: DeliveredOrder,
  },
  {
    path: '/canceled-list',
    component: CanceledOrder,
  },
  {
    path: '/rejected-list',
    component: RejectedOrder,
  },

  //Menu
  {
    path: '/menu-items',
    component: MenuList,
  },
  {
    path: '/add-menu-item',
    component: AddItem,
  },
  ////categories
  {
    path: '/categories',
    component: CategoryList,
  },
  {
    path: '/add-category',
    component: AddCategory,
  },

  //Report
  // {
  //   path: '/order-report',
  //   component: Page404,
  // },
  {
    path: '/item-report',
    component: ItemReport,
  },

  
  // {
  //   path: '/welcome', // the url
  //   component: Welcome, // view rendered
  // },
  // {
  //   path: '/leads',
  //   component: Leads,
  // },
  // {
  //   path: '/settings-team',
  //   component: Team,
  // },
  // {
  //   path: '/calendar',
  //   component: Calendar,
  // },
  // {
  //   path: '/purchase',
  //   component: Transactions,
  // },
  {
    path: '/settings-profile',
    component: ProfileSettings,
  },
  // {
  //   path: '/settings-billing',
  //   component: Bills,
  // },
  // {
  //   path: '/getting-started',
  //   component: GettingStarted,
  // },
  // {
  //   path: '/features',
  //   component: DocFeatures,
  // },
  // {
  //   path: '/components',
  //   component: DocComponents,
  // },
  // {
  //   path: '/integration',
  //   component: Integration,
  // },
  // {
  //   path: '/charts',
  //   component: Charts,
  // },
  // {
  //   path: '/404',
  //   component: Page404,
  // },
  // {
  //   path: '/blank',
  //   component: Page404,
  // },

  //stocks
  {
    path: '/stocks',
    component: StocksList,
  },
  {
    path: '/add-stock',
    component: AddStock,
  },
  {
    path: '/low-stocks',
    component: LowStocks,
  },
  {
    path: '/expired-stocks',
    component: ExpiredStocks,
  },



]

export default routes
