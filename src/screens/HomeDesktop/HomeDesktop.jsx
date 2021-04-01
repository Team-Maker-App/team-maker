import React from 'react';
import { useHistory } from 'react-router-dom';
import { ReactComponent as LogoDesktop } from '../../styles/svg/logo-desktop.svg';
import { ReactComponent as FormExample } from '../../styles/svg/undraw_text_field_htlv.svg';
import { ReactComponent as RandomExample } from '../../styles/svg/undraw_random_thoughts_xejj.svg';
import { ReactComponent as ShareExample } from '../../styles/svg/undraw_Social_media_re_w12q.svg';
import { ReactComponent as Logo } from '../../styles/svg/isotipo.svg';
import Button from '../../components/Button/Button';

const HomeDesktop = () => {
	const history = useHistory();

	const navigate = () => {
		history.push({
			pathname: '/create',
		});
	};

	return (
		<div className=' bg-primaryDesktop flex flex-col h-screen'>
			<div className='grid place-items-center m-5'>
				<LogoDesktop />
			</div>
			<div className='container mx-auto flex flex-row justify-around items-center m-20 flex-1'>
				<div className='max-w-min md:w-1/3'>
					<FormExample width={402} height={220} />
					<p className='font-sans text-center text-xl'>
						{'Escribe el nombre de las personas \n que van a participar'}
					</p>
				</div>
				<div className='max-w-min md:w-1/3'>
					<RandomExample width={402} height={220} />
					<p className='font-sans text-center text-xl'>
						{'Team Maker se encarga\nde mezclarlos aleatoriamente'}
					</p>
				</div>
				<div className='max-w-min md:w-1/3'>
					<ShareExample height={220} width={402} />
					<p className='font-sans text-center text-xl'>
						Comparti el resultado en donde quieras
					</p>
				</div>
			</div>
			<div className='w-full h-60 flex justify-between items-center bg-wavyPattern'>
				<div className='pl-8 pr-8 mt-16'>
					<Logo />
				</div>
				<div className='pl-8 pr-8 mt-20'>
					<Button className='h-20 w-72' action={navigate}>
						<p className='font-sans text-center text-3xl text-primary'>
							{'Comenzar >'}
						</p>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomeDesktop;
