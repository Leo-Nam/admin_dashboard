import './sidebar.css'
import { LineStyle, Timeline, TrendingUp, Person, Storefront, AttachMoney, Equalizer, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, ErrorOutline} from '@material-ui/icons'
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
	<div className="sidebar">
		<div className="sidevarWrapper">
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">Dashboard</h3>
				<ul className="sidebarList">
					<li className="sidebarListItem active">
						<LineStyle className="sidebarIcon" />
						Home
					</li>
					<li className="sidebarListItem">
						<Timeline className="sidebarIcon" />
						Analytics
					</li>
					<li className="sidebarListItem">
						<TrendingUp className="sidebarIcon" />
						Sales
					</li>
				</ul>
			</div>
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">Quick Menu</h3>
				<ul className="sidebarList">
					<Link to={"/users"} className="link">
						<li className="sidebarListItem">
							<Person className="sidebarIcon" />
							Users
						</li>
					</Link>
					<Link to={"/products"} className="link">
						<li className="sidebarListItem">
							<Storefront className="sidebarIcon" />
							Products
						</li>
					</Link>
					<Link to={"/users"} className="link">
						<li className="sidebarListItem">
							<AttachMoney className="sidebarIcon" />
							Transactions
						</li>
					</Link>
					<Link to={"/users"} className="link">
						<li className="sidebarListItem">
							<Equalizer className="sidebarIcon" />
							Reports
						</li>
					</Link>
				</ul>
			</div>
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">Notifications</h3>
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<MailOutline className="sidebarIcon" />
						Mail
					</li>
					<li className="sidebarListItem">
						<DynamicFeed className="sidebarIcon" />
						Feedback
					</li>
					<li className="sidebarListItem">
						<ChatBubbleOutline className="sidebarIcon" />
						Message
					</li>
				</ul>
			</div>
			<div className="sidebarMenu">
				<h3 className="sidebarTitle">Staffs</h3>
				<ul className="sidebarList">
					<li className="sidebarListItem">
						<WorkOutline className="sidebarIcon" />
						Manage
					</li>
					<li className="sidebarListItem">
						<Timeline className="sidebarIcon" />
						Analytics
					</li>
					<li className="sidebarListItem">
						<ErrorOutline className="sidebarIcon" />
						Reports
					</li>
				</ul>
			</div>
		</div>
	</div>
  )
}
