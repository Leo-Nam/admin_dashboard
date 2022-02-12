import './widgetSm.css'
import { Visibility } from '@material-ui/icons';

export default function WidgetSm() {
  return (
	<div className="WidgetSm">
		<span className="widgetSmTitle">New Join Members</span>
		<ul className="widgetSmList">
			<li className="widgetSmListItem">
				<img 
					src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" 
					alt="" 
					className="widgetSmImg" 
				/>
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Anna Keller</span>
					<span className="widgetSmUserTitle">Software Engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className="widgetSmIcon" />
					Display
				</button>
			</li>
			<li className="widgetSmListItem">
				<img 
					src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" 
					alt="" 
					className="widgetSmImg" 
				/>
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Anna Keller</span>
					<span className="widgetSmUserTitle">Software Engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className="widgetSmIcon" />
					Display
				</button>
			</li>
			<li className="widgetSmListItem">
				<img 
					src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" 
					alt="" 
					className="widgetSmImg" 
				/>
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Anna Keller</span>
					<span className="widgetSmUserTitle">Software Engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className="widgetSmIcon" />
					Display
				</button>
			</li>
			<li className="widgetSmListItem">
				<img 
					src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" 
					alt="" 
					className="widgetSmImg" 
				/>
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Anna Keller</span>
					<span className="widgetSmUserTitle">Software Engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className="widgetSmIcon" />
					Display
				</button>
			</li>
			<li className="widgetSmListItem">
				<img 
					src="https://assets.imgix.net/hp/snowshoe.jpg?auto=compress&w=900&h=600&fit=crop" 
					alt="" 
					className="widgetSmImg" 
				/>
				<div className="widgetSmUser">
					<span className="widgetSmUsername">Anna Keller</span>
					<span className="widgetSmUserTitle">Software Engineer</span>
				</div>
				<button className="widgetSmButton">
					<Visibility className="widgetSmIcon" />
					Display
				</button>
			</li>
		</ul>
	</div>
  )
}
