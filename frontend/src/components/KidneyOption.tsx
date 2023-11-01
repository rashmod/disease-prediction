import { Link } from 'react-router-dom';
import KidneySVG from '../assets/KidneySVG';

const LiverOption = () => {
	return (
		<Link
			to='/kidney'
			className='flex flex-col items-center justify-center gap-3 p-5 transition-all duration-200 border-2 border-white rounded-lg hover:border-primary-500 group'>
			<KidneySVG />
			<div className='text-lg font-medium transition-all duration-200 group-hover:text-primary-500'>
				Kidney
			</div>
		</Link>
	);
};

export default LiverOption;
