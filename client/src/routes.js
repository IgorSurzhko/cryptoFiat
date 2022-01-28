import Dashboard from './views/Dashboard.js';
import Icons from './views/Icons.js';
import Notifications from './views/Notifications.js';
import Offers from './views/Offers.js';
import EditProfile from './views/EditProfile';
import DealRoom from './views/DealRoom';

let routes = [];

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
	routes = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: 'tim-icons icon-chart-pie-36',
			component: Dashboard
		},

		{
			path: '/editprofile',
			name: 'Edit Profile',
			icon: 'tim-icons icon-single-02',
			component: EditProfile
		},
		{
			path: '/offers',
			name: 'Offers',
			icon: 'tim-icons icon-credit-card',
			component: Offers
		},
		{
			path: '/dealroom',
			name: 'Deal Room',
			icon: 'tim-icons icon-credit-card',
			component: DealRoom
		},
		{
			path: '/icons',
			name: 'Icons',
			icon: 'tim-icons icon-atom',
			component: Icons
		},
		{
			path: '/notifications',
			name: 'Notifications',
			icon: 'tim-icons icon-bell-55',
			component: Notifications
		}
	];
} else {
	routes = [
		{
			path: '/dashboard',
			name: 'Dashboard',
			icon: 'tim-icons icon-chart-pie-36',
			component: Dashboard
		},

		{
			path: '/editprofile',
			name: 'Edit Profile',
			icon: 'tim-icons icon-single-02',
			component: EditProfile
		},
		{
			path: '/offers',
			name: 'Offers',
			icon: 'tim-icons icon-credit-card',
			component: Offers
		}
	];
}

export default routes;
