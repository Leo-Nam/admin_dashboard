import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
	<div className="topbar">
		<div className="topbarWrapper">
			<div className="topLeft">
				<span className="logo">Leo Admin</span>
			</div>
			<div className="topRight">
				<div className="topbarIconContainer">
					<NotificationsNone />
					<span className="topIconBadge">2</span>
				</div>
				<div className="topbarIconContainer">
					<Language />
					<span className="topIconBadge">2</span>
				</div>
				<div className="topbarIconContainer">
					<Settings />
				</div>
				<img src="https://assets.imgix.net/examples/bluehat.jpg?fp-debug=1&crop=focalpoint&fit=crop&h=600&w=900&auto=compress" alt="" className="topAvatar" />
			</div>
		</div>
	</div>
  )
}
