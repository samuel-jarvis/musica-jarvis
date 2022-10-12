import React from 'react';
import './curated.scss';
import { AiTwotoneHeart } from 'react-icons/ai';
import image from '../../../assets/curated.png';
import vector from '../../../assets/vector.png';

const Curated = () => {
	return (
		<section className="curatedCard">
			<div className="curatedCard__header">
				<p className="curatedCard__header__title">Curated Playlist</p>
			</div>

			<div className="curatedCard__body">
				<h3 className="curatedCard__body__title">R & B Hits</h3>
				<p className="curatedCard__body__subtitle">
					All mine, Lie again, Petty call me everyday, <br /> Out of time, No
					love, Bad habit, <br /> and so much more
				</p>
			</div>

			<div className="curatedCard__footer">
				<div className="curatedCard__footer__images">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
						alt="album cover"
						className="curatedCard__footer__images__image"
					/>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
						alt="album cover"
						className="curatedCard__footer__images__image"
					/>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
						alt="album cover"
						className="curatedCard__footer__images__image"
					/>
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU"
						alt="album cover"
						className="curatedCard__footer__images__image"
					/>
				</div>

				<div className="curatedCard__footer__icon">
					<AiTwotoneHeart />
				</div>

				<div className="curatedCard__footer__likes">33.3k likes</div>
			</div>

			<div className="curatedCard__image">
				<img src={image} alt="curated image" />
			</div>

			<div className="curatedCard__vector">
				<img src={vector} alt="vector" />
			</div>
		</section>
	);
};

export default Curated;
