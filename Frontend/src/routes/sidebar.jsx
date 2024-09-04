/** Icons are imported separatly to reduce build time */
// import BellIcon from '@heroicons/react/24/outline/BellIcon'
// import DocumentTextIcon from '@heroicons/react/24/outline/DocumentTextIcon'
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
// import TableCellsIcon from '@heroicons/react/24/outline/TableCellsIcon'
// import WalletIcon from '@heroicons/react/24/outline/WalletIcon'
// import CodeBracketSquareIcon from '@heroicons/react/24/outline/CodeBracketSquareIcon'
// import DocumentIcon from '@heroicons/react/24/outline/DocumentIcon'
// import ExclamationTriangleIcon from '@heroicons/react/24/outline/ExclamationTriangleIcon'
// import CalendarDaysIcon from '@heroicons/react/24/outline/CalendarDaysIcon'
// import ArrowRightOnRectangleIcon from '@heroicons/react/24/outline/ArrowRightOnRectangleIcon'
// import UserIcon from '@heroicons/react/24/outline/UserIcon'
// import Cog6ToothIcon from '@heroicons/react/24/outline/Cog6ToothIcon'
// import BoltIcon from '@heroicons/react/24/outline/BoltIcon'
// import ChartBarIcon from '@heroicons/react/24/outline/ChartBarIcon'
// import CurrencyDollarIcon from '@heroicons/react/24/outline/CurrencyDollarIcon'
// import InboxArrowDownIcon from '@heroicons/react/24/outline/InboxArrowDownIcon'
// import UsersIcon from '@heroicons/react/24/outline/UsersIcon'
// import KeyIcon from '@heroicons/react/24/outline/KeyIcon'
// import DocumentDuplicateIcon from '@heroicons/react/24/outline/DocumentDuplicateIcon'
//order
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { FcCancel } from "react-icons/fc";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { MdOutlinePending } from "react-icons/md";

//menu
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { MdOutlineCategory } from "react-icons/md";
//report
import { TbPresentationAnalytics } from "react-icons/tb";
import { TbReport } from "react-icons/tb";
import { HiOutlineDocumentReport } from "react-icons/hi";



const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const routes = [

  {
    path: '/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    icon: <MdOutlineRestaurantMenu className={iconClasses} />, // icon component
    name: 'Menu', // name that appear in Sidebar
    submenu: [
      {
        path: '/menu-items',
        icon: <MdOutlineRestaurantMenu className={submenuIconClasses} />,
        name: 'Menu item',
      },
      {
        path: '/categories',
        icon: <MdOutlineCategory className={submenuIconClasses} />,
        name: 'Categories',
      },
    ]
  },
  {
    icon: <MdOutlineShoppingCart className={iconClasses} />, // icon component
    name: 'Order', // name that appear in Sidebar
    submenu: [
      {
        path: '/order-list',
        icon: <MdOutlineShoppingCart className={submenuIconClasses} />,
        name: 'All',
      },
      {
        path: '/pending-list',
        icon: <MdOutlinePending className={submenuIconClasses} />,
        name: 'Pending',
      },
      {
        path: '/confirmed-list',
        icon: <GiConfirmed className={submenuIconClasses} />,
        name: 'Confirmed',
      },
      {
        path: '/delivered-list',
        icon: <MdOutlineDeliveryDining className={submenuIconClasses} />,
        name: 'Delivered',
      },
      {
        path: '/canceled-list',
        icon: <FcCancel className={submenuIconClasses} />,
        name: 'Canceled',
      },
      {
        path: '/rejected-list',
        icon: <MdOutlineCancel className={submenuIconClasses} />,
        name: 'Rejected', 
      },
    ]
  },
  {
    icon: <TbPresentationAnalytics className={iconClasses} />, // icon component
    name: 'Report', // name that appear in Sidebar
    submenu: [
      // {
      //   path: '/order-report',
      //   icon: <TbReport className={submenuIconClasses} />,
      //   name: 'Order report',
      // },
      {
        path: '/item-report',
        icon: <HiOutlineDocumentReport className={submenuIconClasses} />,
        name: 'Item report',
      },
    ]
  },


  // {
  //   path: '/menu',
  //   icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //   name: 'Menu',
  // },
  // {
  //   path: '/inventory', // url
  //   icon: <InboxArrowDownIcon className={iconClasses} />, // icon component
  //   name: 'Inventory', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/stocks',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Stocks',
  //     },
  //     {
  //       path: '/low-stocks',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Low Stocks',
  //     },
  //     {
  //       path: '/expired-stocks',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Expired Stocks',
  //     },
  //     {
  //       path: '/categories',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Categories',
  //     },
  //   ]
  // },
  // {
  //   path: '/charts', // url
  //   icon: <ChartBarIcon className={iconClasses} />, // icon component
  //   name: 'Analytics', // name that appear in Sidebar
  // },
  // {
  //   path: '/integration', // url
  //   icon: <BoltIcon className={iconClasses} />, // icon component
  //   name: 'Integration', // name that appear in Sidebar
  // },
  // {
  //   path: '/sales', // url
  //   icon: <CalendarDaysIcon className={iconClasses} />, // icon component
  //   name: 'Sales', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/invoice',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Invoices',
  //     },
  //     {
  //       path: '/receipts',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Receipts',
  //     },
  //     {
  //       path: '/',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'All Sales ',
  //     },
  //   ]
  // },
  // {
  //   path: '/calendar', // url
  //   icon: <CalendarDaysIcon className={iconClasses} />, // icon component
  //   name: 'Calendar', // name that appear in Sidebar
  // },

  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'Pages', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/login',
  //       icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
  //       name: 'Login',
  //     },
  //     {
  //       path: '/register', //url
  //       icon: <UserIcon className={submenuIconClasses} />, // icon component
  //       name: 'Register', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/forgot-password',
  //       icon: <KeyIcon className={submenuIconClasses} />,
  //       name: 'Forgot Password',
  //     },
  //     {
  //       path: '/blank',
  //       icon: <DocumentIcon className={submenuIconClasses} />,
  //       name: 'Blank Page',
  //     },
  //     {
  //       path: '/404',
  //       icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
  //       name: '404',
  //     },
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <Cog6ToothIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'Settings', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/settings-profile', //url
  //       icon: <UserIcon className={submenuIconClasses} />, // icon component
  //       name: 'Profile', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/settings-billing',
  //       icon: <WalletIcon className={submenuIconClasses} />,
  //       name: 'Billing',
  //     },
  //     {
  //       path: '/settings-team', // url
  //       icon: <UsersIcon className={submenuIconClasses} />, // icon component
  //       name: 'Team Members', // name that appear in Sidebar
  //     },
  //   ]
  // },
  // {
  //   path: '', //no url needed as this has submenu
  //   icon: <DocumentTextIcon className={`${iconClasses} inline`} />, // icon component
  //   name: 'Documentation', // name that appear in Sidebar
  //   submenu: [
  //     {
  //       path: '/getting-started', // url
  //       icon: <DocumentTextIcon className={submenuIconClasses} />, // icon component
  //       name: 'Getting Started', // name that appear in Sidebar
  //     },
  //     {
  //       path: '/features',
  //       icon: <TableCellsIcon className={submenuIconClasses} />,
  //       name: 'Features',
  //     },
  //     {
  //       path: '/components',
  //       icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
  //       name: 'Components',
  //     }
  //   ]
  // },

]

export default routes


