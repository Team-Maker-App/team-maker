import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { filterPlayers, randomizePlayers } from '../../helpers';
import Layout from '../../components/Layout';

const CreateTeam = () => {
	const [value, setValue] = useState([]);
	const [players, setPlayers] = useState([]);
	const [newplayer, setNewPlayer] = useState('');

	const today = `${new Date().getFullYear()}-${`${
		new Date().getMonth() + 1
	}`.padStart(2, 0)}-${`${new Date().getDate() + 1}`.padStart(
		2,
		0
	)}T${`${new Date().getHours()}`.padStart(
		2,
		0
	)}:${`${new Date().getMinutes()}`.padStart(2, 0)}`;

	const [match, setMatch] = useState({
		location: '',
		date: today,
	});

	const history = useHistory();

	const placeholder = `Jugador1\nJugador2\nJugador3\nJugador4\nJugador5....
  `;

	const addPlayer = () => {
		setPlayers(filterPlayers([...players, newplayer]));
	};

	const handlePlayers = (_value) => {
		setValue(_value);
		const separatedByLineAndComma = filterPlayers(_value);
		setPlayers(separatedByLineAndComma);
	};

	const handlePaste = () => {
		navigator.clipboard.readText().then((clipText) => {
			handlePlayers(clipText);
		});
	};

	const CreateTeams = () => {
		randomizePlayers(players);
		history.push({
			pathname: '/list',
			state: { players, match },
		});
	};

	return (
		<Layout>
			<div className='flex flex-col p-5 gap-6 max-w-screen-xl mx-auto w-full'>
				<div
					className='flex flex-col flex-auto w-full relative'
					style={{ maxHeight: '400px' }}
				>
					<textarea
						className='p-4 w-full flex-1 rounded-md resize-none'
						onChange={(e) => handlePlayers(e.target.value)}
						value={value}
						placeholder={placeholder}
					/>
					<button
						onClick={() => handlePaste()}
						type='button'
						className='sm:ml-3 absolute bottom-5 right-2 inline-flex items-center p-3 rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-indigo-700 focus:outline-none'
					>
						<svg
							className='h-5 w-5'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
							/>
						</svg>
					</button>
				</div>
				<p className='text-white font-sans '>Datos del partido</p>
				<div className='flex gap-5'>
					<input
						type='text'
						className=' rounded-md h-full p-2 block w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 '
						placeholder='Lugar'
						onChange={(event) =>
							setMatch({ ...match, location: event.target.value })
						}
						value={match.location}
					/>
					<input
						type='datetime-local'
						className=' w-1/4 rounded-md h-full p-2 block shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm border-gray-300 '
						placeholder='Fecha'
						onChange={(event) =>
							setMatch({ ...match, date: event.target.value })
						}
						min={today}
						value={match.date}
					/>
				</div>
				<div className='flex justify-center w-full'>
					<button
						disabled={!(players.length > 1)}
						type='submit'
						onClick={() => CreateTeams()}
						className='disabled:opacity-50 ml-3 inline-flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none'
					>
						Crear equipos
					</button>
				</div>
			</div>
		</Layout>
	);
};

export default CreateTeam;
