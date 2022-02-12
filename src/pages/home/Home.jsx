import './home.css'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import Chart from '../../components/chart/Chart'
import { userData } from '../../dummyData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

export default function Home() {
  return (
	<div className="home">
		<FeaturedInfo />
		<Chart title="월별 입찰 폐기물 수량" data = { userData } dataKey="Waste Amout" grid />
		<div className="homeWidgets">
			<WidgetSm />
			<WidgetLg />
		</div>
	</div>
  )
}
