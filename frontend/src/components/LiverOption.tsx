import { Link } from 'react-router-dom';
import LiverSVG from '../assets/LiverSVG';

const LiverOption = () => {
	return (
		<Link
			to='/liver'
			className='flex flex-col items-center justify-center gap-3 p-5 transition-all duration-200 border-2 border-white rounded-lg hover:border-primary-500 group'>
			<LiverSVG />
			<div className='text-lg font-medium transition-all duration-200 group-hover:text-primary-500'>
				Liver
			</div>
		</Link>
	);
};

export default LiverOption;
