import './featuredInfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function featuredInfo() {
  return (
	<div className="featured">
		<div className="featuredItem">
			<span className="featuredTitle">수익</span>
			<div className="featuredMonyContainer">
				<span className="featuredMoney">$2,415</span>
				<span className="featuredMoneyRate">
					-11.4 <ArrowDownward className="featuredIcon negative" />
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
		<div className="featuredItem">
			<span className="featuredTitle">영업실적</span>
			<div className="featuredMonyContainer">
				<span className="featuredMoney">$4,415</span>
				<span className="featuredMoneyRate">
					-1.4 <ArrowDownward className="featuredIcon negative" />
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
		<div className="featuredItem">
			<span className="featuredTitle">비용</span>
			<div className="featuredMonyContainer">
				<span className="featuredMoney">$2,215</span>
				<span className="featuredMoneyRate">
					+9.4 <ArrowUpward className="featuredIcon" />
				</span>
			</div>
			<span className="featuredSub">Compared to last month</span>
		</div>
	</div>
  )
}
