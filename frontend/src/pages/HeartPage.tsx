import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const HeartInitialState = {
	bmi: 0,
	smoking: '',
	alcohol_drinking: '',
	stroke: '',
	physical_health: 0,
	mental_health: 0,
	difficulty_walking: '',
	sex: '',
	age_category: '',
	race: '',
	diabetic: '',
	physical_activity: '',
	general_health: '',
	sleep_time: 0,
	asthma: '',
	kidney_disease: '',
	skin_cancer: '',
};

const HeartPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: HeartInitialState });
	const navigate = useNavigate();

	const onSubmitHandler = (data: typeof HeartInitialState) => {
		console.log(data);
		console.log(errors);

		navigate('/results', { state: { chance: 0.2, message: 'Heart' } });
	};
	return (
		<div className='w-1/3 mx-auto'>
			<Link
				to='/'
				className='border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 py-1.5 px-4 text-xs'>
				Go back
			</Link>
			<h1 className='mt-5 text-3xl text-center'>Heart Form</h1>
			<form
				className='grid gap-4 my-5'
				onSubmit={handleSubmit(onSubmitHandler)}>
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
						htmlFor='smoking'
						className='block mb-2 text-sm font-medium'>
						Smoking
					</label>
					<select
						id='smoking'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('smoking', {
							required: 'Value is required',
						})}>
						<option value=''>Select smoking status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['smoking'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['smoking'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='alcohol_drinking'
						className='block mb-2 text-sm font-medium'>
						Alcohol Consumption
					</label>
					<select
						id='alcohol_drinking'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('alcohol_drinking', {
							required: 'Value is required',
						})}>
						<option value=''>
							Select alcohol consumption status
						</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['alcohol_drinking'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['alcohol_drinking'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='stroke'
						className='block mb-2 text-sm font-medium'>
						Stroke
					</label>
					<select
						id='stroke'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('stroke', {
							required: 'Value is required',
						})}>
						<option value=''>Select stroke status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['stroke'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['stroke'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='physical_health'
						className='block mb-2 text-sm font-medium'>
						Physical Health
					</label>
					<input
						type='number'
						id='physical_health'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='29'
						{...register('physical_health', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['physical_health'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['physical_health'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='mental_health'
						className='block mb-2 text-sm font-medium'>
						Mental Health
					</label>
					<input
						type='number'
						id='mental_health'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='29'
						{...register('mental_health', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['mental_health'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['mental_health'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='difficulty_walking'
						className='block mb-2 text-sm font-medium'>
						Difficulty Walking
					</label>
					<select
						id='difficulty_walking'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('difficulty_walking', {
							required: 'Value is required',
						})}>
						<option value=''>
							Select difficulty walking status
						</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['difficulty_walking'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['difficulty_walking'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='sex'
						className='block mb-2 text-sm font-medium outline-none'>
						Sex
					</label>
					<select
						id='sex'
						className='border-2 bg-black border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('sex', {
							required: 'Value is required',
						})}>
						<option value=''>Choose a sex</option>
						<option value='male'>Male</option>
						<option value='female'>Female</option>
					</select>
					{errors && errors['sex'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['sex'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='age_category'
						className='block mb-2 text-sm font-medium outline-none'>
						Age Category
					</label>
					<select
						id='age_category'
						className='border-2 bg-black border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('age_category', {
							required: 'Value is required',
						})}>
						<option value=''>Choose a age category</option>
						<option value='50-54'>50-54</option>
						<option value='55-59'>55-59</option>
						<option value='60-64'>60-64</option>
						<option value='65-69'>65-69</option>
						<option value='70-74'>70-74</option>
					</select>
					{errors && errors['age_category'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['age_category'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='race'
						className='block mb-2 text-sm font-medium outline-none'>
						Race
					</label>
					<select
						id='race'
						className='border-2 bg-black border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('race', {
							required: 'Value is required',
						})}>
						<option value=''>Choose a race</option>
						<option value='white'>White</option>
						<option value='black'>Black</option>
						<option value='hispanic'>Hispanic</option>
						<option value='asian'>Asian</option>
						<option value='other'>Other</option>
					</select>
					{errors && errors['race'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['race'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='diabetic'
						className='block mb-2 text-sm font-medium'>
						Diabetic
					</label>
					<select
						id='diabetic'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('diabetic', {
							required: 'Value is required',
						})}>
						<option value=''>Select diabetic status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['diabetic'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['diabetic'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='physical_activity'
						className='block mb-2 text-sm font-medium'>
						Physical Activity
					</label>
					<select
						id='physical_activity'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('physical_activity', {
							required: 'Value is required',
						})}>
						<option value=''>
							Select physical activity status
						</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['physical_activity'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['physical_activity'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='general_health'
						className='block mb-2 text-sm font-medium'>
						General Health
					</label>
					<select
						id='general_health'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('general_health', {
							required: 'Value is required',
						})}>
						<option value=''>Select general health status</option>
						<option value='excellent'>Excellent</option>
						<option value='very_good'>Very Good</option>
						<option value='good'>Good</option>
						<option value='fair'>Fair</option>
						<option value='poor'>Poor</option>
					</select>
					{errors && errors['general_health'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['general_health'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='sleep_time'
						className='block mb-2 text-sm font-medium'>
						Sleep Time
					</label>
					<input
						type='number'
						id='sleep_time'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='8'
						{...register('sleep_time', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['sleep_time'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['sleep_time'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='asthma'
						className='block mb-2 text-sm font-medium'>
						Asthma
					</label>
					<select
						id='asthma'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('asthma', {
							required: 'Value is required',
						})}>
						<option value=''>Select asthma status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['asthma'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['asthma'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='kidney_disease'
						className='block mb-2 text-sm font-medium'>
						Kidney Disease
					</label>
					<select
						id='kidney_disease'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('kidney_disease', {
							required: 'Value is required',
						})}>
						<option value=''>Select kidney disease status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['kidney_disease'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['kidney_disease'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='skin_cancer'
						className='block mb-2 text-sm font-medium'>
						Skin Cancer
					</label>
					<select
						id='skin_cancer'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('skin_cancer', {
							required: 'Value is required',
						})}>
						<option value=''>Select skin cancer status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['skin_cancer'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['skin_cancer'].message}
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

export default HeartPage;
