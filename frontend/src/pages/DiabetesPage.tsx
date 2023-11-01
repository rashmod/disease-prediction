import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const DiabetesInitialState = {
	pregnancies: 0,
	glucose: 0,
	blood_pressure: 0,
	skin_thickness: 0,
	insulin: 0,
	bmi: 0,
	diabetes_pedigree_function: 0,
	age: 1,
};
const DiabetesPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: DiabetesInitialState });
	const navigate = useNavigate();
	const onSubmitHandler = (data: typeof DiabetesInitialState) => {
		console.log(data);
		console.log(errors);
		navigate('/results', { state: { chance: 0.2, message: 'Diabetes' } });
	};
	return (
		<div className='w-1/3 mx-auto'>
			<Link
				to='/'
				className='border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 py-1.5 px-4 text-xs'>
				Go back
			</Link>
			<h1 className='mt-5 text-3xl text-center'>Diabetes Form</h1>
			<form
				className='grid gap-4 my-5'
				onSubmit={handleSubmit(onSubmitHandler)}>
				<div>
					<label
						htmlFor='pregnancies'
						className='block mb-2 text-sm font-medium'>
						Pregnancies
					</label>
					<input
						type='number'
						id='pregnancies'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='3'
						{...register('pregnancies', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['pregnancies'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['pregnancies'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='glucose'
						className='block mb-2 text-sm font-medium'>
						Glucose
					</label>
					<input
						type='number'
						id='glucose'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='85'
						{...register('glucose', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['glucose'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['glucose'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='blood_pressure'
						className='block mb-2 text-sm font-medium'>
						Blood Pressure
					</label>
					<input
						type='number'
						id='blood_pressure'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='70'
						{...register('blood_pressure', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['blood_pressure'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['blood_pressure'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='skin_thickness'
						className='block mb-2 text-sm font-medium'>
						Skin Thickness
					</label>
					<input
						type='number'
						id='skin_thickness'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='20'
						{...register('skin_thickness', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['skin_thickness'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['skin_thickness'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='insulin'
						className='block mb-2 text-sm font-medium'>
						Insulin
					</label>
					<input
						type='number'
						id='insulin'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='90'
						{...register('insulin', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['insulin'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['insulin'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='bmi'
						className='block mb-2 text-sm font-medium'>
						BMI
					</label>
					<input
						type='number'
						id='bmi'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='26.8'
						step={0.1}
						{...register('bmi', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['bmi'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['bmi'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='diabetes_pedigree_function'
						className='block mb-2 text-sm font-medium'>
						Diabetes Pedigree Function
					</label>
					<input
						type='number'
						id='diabetes_pedigree_function'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='0.351'
						step={0.001}
						{...register('diabetes_pedigree_function', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['diabetes_pedigree_function'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['diabetes_pedigree_function'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='age'
						className='block mb-2 text-sm font-medium'>
						Age
					</label>
					<input
						type='number'
						id='age'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='49'
						{...register('age', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['age'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['age'].message}
						</p>
					)}
				</div>
				<button className='py-2.5 mt-4 border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 hover:bg-primary-500'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default DiabetesPage;
