import DiabetesOption from '../components/DiabetesOption';
import LiverOption from '../components/LiverOption';
import HeartOption from '../components/HeartOption';
import KidneyOption from '../components/KidneyOption';

const Home = () => {
	return (
		<div className='w-1/2 mx-auto'>
			<h1 className='text-4xl text-center'>
				Choose a disease to diagnose
			</h1>

			<div className='grid grid-cols-2 gap-5 p-10 mx-auto'>
				<DiabetesOption />
				<LiverOption />
				<HeartOption />
				<KidneyOption />
			</div>
		</div>
	);
};

export default Home;
