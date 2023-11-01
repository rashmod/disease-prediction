import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const LiverInitialState = {
	age: 1,
	gender: '',
	total_bilirubin: 0,
	direct_bilirubin: 0,
	alkaline_phosphotase: 0,
	alamine_aminotransferase: 0,
	aspartate_aminotransferase: 0,
	total_protein: 0,
	albumin: 0,
	albumin_and_globulin_ratio: 0,
};
const LiverPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: LiverInitialState });

	const navigate = useNavigate();
	const onSubmitHandler = (data: typeof LiverInitialState) => {
		console.log(data);
		console.log(errors);
		navigate('/results', { state: { chance: 0.2, message: 'Liver' } });
	};
	return (
		<div className='w-1/3 mx-auto'>
			<Link
				to='/'
				className='border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 py-1.5 px-4 text-xs'>
				Go back
			</Link>
			<h1 className='mt-5 text-3xl text-center'>Liver Form</h1>
			<form
				className='grid gap-4 my-5'
				onSubmit={handleSubmit(onSubmitHandler)}>
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
				<div>
					<label
						htmlFor='gender'
						className='block mb-2 text-sm font-medium outline-none'>
						Gender
					</label>
					<select
						id='gender'
						className='border-2 bg-black border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('gender', {
							required: 'Please select a gender',
						})}>
						<option value=''>Choose a gender</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
					{errors && errors['gender'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['gender'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='total_bilirubin'
						className='block mb-2 text-sm font-medium'>
						Total Bilirubin
					</label>
					<input
						type='number'
						id='total_bilirubin'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='3.9'
						step={0.1}
						{...register('total_bilirubin', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['total_bilirubin'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['total_bilirubin'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='direct_bilirubin'
						className='block mb-2 text-sm font-medium'>
						Direct Bilirubin
					</label>
					<input
						type='number'
						id='direct_bilirubin'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='0.9'
						step={0.1}
						{...register('direct_bilirubin', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['direct_bilirubin'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['direct_bilirubin'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='alkaline_phosphotase'
						className='block mb-2 text-sm font-medium'>
						Alkaline Phosphotase
					</label>
					<input
						type='number'
						id='alkaline_phosphotase'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='200'
						{...register('alkaline_phosphotase', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['alkaline_phosphotase'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['alkaline_phosphotase'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='alamine_aminotransferase'
						className='block mb-2 text-sm font-medium'>
						Alamine Aminotransferase
					</label>
					<input
						type='number'
						id='alamine_aminotransferase'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='60'
						{...register('alamine_aminotransferase', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['alamine_aminotransferase'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['alamine_aminotransferase'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='aspartate_aminotransferase'
						className='block mb-2 text-sm font-medium'>
						Aspartate Aminotransferase
					</label>
					<input
						type='number'
						id='aspartate_aminotransferase'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='40'
						{...register('aspartate_aminotransferase', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['aspartate_aminotransferase'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['aspartate_aminotransferase'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='total_protein'
						className='block mb-2 text-sm font-medium'>
						Total Protein
					</label>
					<input
						type='number'
						id='total_protein'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='6.8'
						step={0.1}
						{...register('total_protein', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['total_protein'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['total_protein'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='albumin'
						className='block mb-2 text-sm font-medium'>
						Albumin
					</label>
					<input
						type='number'
						id='albumin'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='3.8'
						step={0.1}
						{...register('albumin', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['albumin'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['albumin'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='albumin_and_globulin_ratio'
						className='block mb-2 text-sm font-medium'>
						Albumin and Globulin Ratio
					</label>
					<input
						type='number'
						id='albumin_and_globulin_ratio'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='0.74'
						step={0.01}
						{...register('albumin_and_globulin_ratio', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['albumin_and_globulin_ratio'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['albumin_and_globulin_ratio'].message}
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

export default LiverPage;
