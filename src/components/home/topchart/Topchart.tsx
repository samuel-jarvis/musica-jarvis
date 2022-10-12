import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';

import './topchart.scss';

type TopchartProps = {
	data: {
		id: number;
		title: string;
		image?: string;
		artist: string;
    length: string;
	};
};

const Topchart = ({ data }: TopchartProps) => {
	return (
		<div className="topchart" key={data.id}>
			<div className="topchart__image">
				<img src={data.image} alt="topchart" />
			</div>
			<div className="topchart__details">
				<div className="topchart__details--title">{data.title}</div>
				<div className="topchart__details--artist">{data.artist}</div>
        <div className="topchart__details--length">{data.length}</div>
			</div>
			<div className="topchart__icon">
				<AiOutlineHeart />
			</div>
		</div>
	);
};

export default Topchart;
