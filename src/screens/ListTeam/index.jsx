import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/esm/locale';
import { ReactComponent as Versus } from '../../versus.svg';

// Components
import Alert from '../../components/Alert/Alert';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout';
import ShirtIcon from '../../components/Icons/ShirtIcon';
import ShareIcon from '../../components/Icons/ShareIcon';
import STRINGS from '../../utilities/strings';

const ListTeam = ({ location }) => {
	const history = useHistory();
	const { players, match } = location.state;
	const [firstHalf, setFH] = useState([]);
	const [secondHalf, setSH] = useState([]);

	useEffect(() => {
		if (!players) {
			history.push('/create');
		} else {
			const half = Math.ceil(players?.length / 2);
			setFH(players.splice(0, half));
			setSH(players.splice(-half));
		}
	}, [players, history]);

	const handleOnClick = () => {
		if (navigator.share) {
			navigator
				.share({
					title: 'Team Maker',
					text: 'Esto esta compartido desde Team Maker',
					url:
						'https://tmssl.akamaized.net/images/portrait/originals/57473-1458043478.jpg',
				})
				.then(() => {
					// console.log('Successfully shared');
				})
				.catch(() => {
					// console.error('Something went wrong sharing the blog', error);
				});
		}
	};

	const truncate = (input) => {
		if (input.length > 10) {
			return `${input.substring(0, 10)}...`;
		}
		return input;
	};

	return (
		<Layout>
			<div className='flex flex-col gap-5 p-4 pt-10'>
				<div className='col-span-1 flex shadow-sm rounded-md w-5/6 mx-auto'>
					<div className='flex-shrink-0 flex items-center justify-center w-16 bg-purple-600 text-white text-sm font-medium rounded-l-md'>
						<svg
							width={30}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
					</div>
					<div className='flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate'>
						<div className='flex-1 px-4 py-2 text-sm truncate'>
							<p className='text-gray-900 font-medium hover:text-gray-600'>
								{match.location}
							</p>
							<p className='text-gray-500 capitalize'>
								{format(parseISO(match.date), 'EEEE dd/MM - p', {
									locale: es,
								})}{' '}
								hs
							</p>
							<p className='text-gray-500'>12 Jugadores</p>
						</div>
					</div>
				</div>
				<div
					style={{ minHeight: '100px' }}
					className='relative flex justify-center mb-5 text-center gap-3'
				>
					<div className='relative w-1/2 bg-white rounded-md px-2 py-6'>
						<ShirtIcon color='white' className='absolute top-2 left-2' />
						<ul className='divide-y divide-gray-200'>
							{firstHalf?.map((player, index) => (
								<li
									key={player[index]}
									className='py-1 flex font-display text-lg p-1 my-2 capitalize justify-center'
								>
									{truncate(player)}
								</li>
							))}
						</ul>
					</div>
					<div className='z-10 absolute bottom-3'>
						<Versus width={45} height={45} />
					</div>
					<div className='relative w-1/2 bg-white rounded-md px-2 py-6'>
						<ShirtIcon className='absolute top-2 left-2' />
						<ul className='divide-y divide-gray-200'>
							{secondHalf?.map((player, index) => (
								<li
									key={player[index]}
									className='py-1 flex font-display text-lg p-1 my-2 capitalize justify-center'
								>
									{truncate(player)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<Alert text={STRINGS.listTeamScreen.position} />
				<div className='flex justify-center items-center'>
					<Button action={handleOnClick}>
						<div className='flex gap-4 w-full justify-center items-center'>
							<span>Compartir</span>
							<ShareIcon className='w-4 h-4' />
						</div>
					</Button>
				</div>
			</div>
		</Layout>
	);
};

ListTeam.propTypes = {
	location: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default ListTeam;
