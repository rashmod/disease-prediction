import { Link } from 'react-router-dom';
import DiabetesSVG from '../assets/DiabetesSVG';

const DiabetesOption = () => {
	return (
		<Link
			to='/diabetes'
			className='flex flex-col items-center justify-center gap-3 p-5 transition-all duration-200 border-2 border-white rounded-lg hover:border-primary-500 group'>
			<DiabetesSVG />
			<div className='text-lg font-medium transition-all duration-200 group-hover:text-primary-500'>
				Diabetes
			</div>
		</Link>
	);
};

export default DiabetesOption;
