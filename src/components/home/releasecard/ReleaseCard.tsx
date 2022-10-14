import React from 'react';
import './releasecard.scss';

type ReleaseCardProps = {
	data: {
		id: number;
		title: string;
		img: string;
		artist: string;
	};
};

const ReleaseCard = ({ data }: ReleaseCardProps) => {
	return (
    <div className="releaseCard">
			<div className="releaseCard__img">
				<img src={data.img} alt={data.title} />
			</div>
			<div className="releaseCard__info">
				<h3>{data.title}</h3>
				<p>{data.artist}</p>
			</div>
    </div>
  )
};

export default ReleaseCard;
