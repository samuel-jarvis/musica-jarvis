import React from 'react';

type Props = {
	className?: string;
};

function Home({ className }: Props) {
	return (
		<div
			className={`group ${className ? className : ''}`}
		>
			<svg
				width="100%"
				height="100%"
				viewBox="0 0 42 42"
				fill="none"
				xmlns="http://www.w3.org/2000/svg" 
				style={{ width: '4.2rem', marginLeft: '-3px', margin: "auto" }}
			>
				<path d="M17.3818 29.0503V26.239C17.3818 25.5266 17.9611 24.9478 18.6786 24.9433H21.3132C22.034 24.9433 22.6183 25.5234 22.6183 26.239V29.0421C22.6182 29.66 23.1204 30.1622 23.7427 30.1667H25.5402C26.3797 30.1688 27.1855 29.8392 27.7799 29.2507C28.3743 28.6621 28.7084 27.8629 28.7084 27.0294V19.0437C28.7084 18.3704 28.4077 17.7318 27.8876 17.2999L21.7811 12.4514C20.7137 11.6034 19.1891 11.6308 18.1533 12.5166L12.1781 17.2999C11.6334 17.7191 11.3078 18.3596 11.2917 19.0437V27.0213C11.2917 28.7584 12.7101 30.1667 14.4598 30.1667H16.2163C16.5159 30.1688 16.804 30.0522 17.0167 29.8426C17.2294 29.633 17.349 29.3478 17.3489 29.0503H17.3818Z" />
			</svg>
		</div>
	);
}

export default Home;
