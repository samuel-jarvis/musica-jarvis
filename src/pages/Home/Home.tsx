import React from 'react';
import Curated from '../../components/home/curated/Curated';
import './home.scss';
import { topChartData } from '../../data/topchart/topchartdata';
import { releaseData } from '../../data/release/releasedata';
import Topchart from '../../components/home/topchart/Topchart';
import ReleaseCard from '../../components/home/releasecard/ReleaseCard';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Home = () => {
	return (
		<div className="home">
			<div className='top_home_section'>
				{/* component for the curated card */}
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

			<div>
				<div className='release__title heading'>New Releases</div>

				<div className='release__container'>
					<Splide
						options={{
							// type: 'loop',
							perPage: 6,
							wheel: true,
							gap: '1rem',
							pagination: false,
							arrows: false,
								// breakpoints: {
								// 	600: {
								// 		perPage: 1,
								// 		perMove: 1,
								// 	},
								// 	900: {
								// 		perPage: 6,
								// 		perMove: 1,
								// 	},
								// 	1200: {
								// 		perPage: 6,
								// 		perMove: 1,
								// 	},
								// },
						}}
					>
					{
						releaseData.map((data) => (
							<SplideSlide>
								<ReleaseCard data={data} />
							</SplideSlide>
						))
					}
					</Splide>
				</div>
			</div>
			<div>
				<div className='release__title heading'>Trending</div>

				<div className='release__container'>
					<Splide
						options={{
							// type: 'loop',
							perPage: 6,
							wheel: true,
							gap: '1rem',
							pagination: false,
							arrows: false,
								// breakpoints: {
								// 	600: {
								// 		perPage: 1,
								// 		perMove: 1,
								// 	},
								// 	900: {
								// 		perPage: 6,
								// 		perMove: 1,
								// 	},
								// 	1200: {
								// 		perPage: 6,
								// 		perMove: 1,
								// 	},
								// },
						}}
					>
					{
						releaseData.map((data) => (
							<SplideSlide>
								<ReleaseCard data={data} />
							</SplideSlide>
						))
					}
					</Splide>
				</div>
			</div>

		</div>
	);
};

export default Home;
