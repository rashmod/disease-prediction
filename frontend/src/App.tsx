import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DiabetesPage from './pages/DiabetesPage';
import LiverPage from './pages/LiverPage';
import KidneyPage from './pages/KidneyPage';
import HeartPage from './pages/HeartPage';
import ResultPage from './pages/ResultPage';

function App() {
	return (
		<main className='flex justify-center min-h-screen bg-black'>
			<section className='w-10/12 py-10 my-auto text-white'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/diabetes' element={<DiabetesPage />} />
					<Route path='/liver' element={<LiverPage />} />
					<Route path='/kidney' element={<KidneyPage />} />
					<Route path='/heart' element={<HeartPage />} />
					<Route path='/results' element={<ResultPage />} />
				</Routes>
			</section>
		</main>
	);
}

export default App;
