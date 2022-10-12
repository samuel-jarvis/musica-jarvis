import React from 'react';
import Curated from '../../components/home/curated/Curated';
import './home.scss';
import { topChartData } from '../../data/topchart/topchartdata';
import Topchart from '../../components/home/topchart/Topchart';

const Home = () => {
	return (
		<div className="home">
			<div className='top_home_section'>
				<Curated />

				<div className='top_chart'>
					<div className='top_chart__title heading'>Top Charts</div>
					{
						topChartData.map((data) => (
							<Topchart data={data} />
						))
					}
				</div>
			</div>

			<div>New Releases</div>

			<div>Trending</div>
		</div>
	);
};

export default Home;
