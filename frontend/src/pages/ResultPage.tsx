import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import randomWait from '../api/api';
import getResult from '../utils/getResult';
const ResultPage = () => {
	const location = useLocation();

	const [loading, setLoading] = useState(true);
	useEffect(() => {
		randomWait().then(() => setLoading(false));
	}, []);

	if (loading) return <div>Loading...</div>;
	return (
		<div className='flex flex-col items-center justify-center w-full h-full gap-10'>
			<h1 className='text-3xl'>
				Result for {location.state.message} diagnosis is:{' '}
				{getResult(Number(location.state.chance))}
			</h1>
			<Link
				to='/'
				className='py-2.5 px-5 mt-4 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 hover:bg-primary-500'>
				Go Home
			</Link>
		</div>
	);
};

export default ResultPage;
