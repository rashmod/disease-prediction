import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const KidneyInitialState = {
	age: 1,
	blood_pressure: 0,
	specific_gravity: 0,
	albumin: 0,
	sugar: 0,
	red_blood_cells: '',
	pus_cells: '',
	pus_cell_clumps: '',
	bacteria: '',
	blood_glucose_random: 0,
	blood_urea: 0,
	serum_creatinine: 0,
	sodium: 0,
	potassium: 0,
	hemoglobin: 0,
	packed_cell_volume: 0,
	white_blood_cell_count: 0,
	red_blood_cell_count: 0,
	hypertension: '',
	diabetes_mellitus: '',
	coronary_artery_disease: '',
	appetite: '',
	pedal_edema: '',
	anemia: '',
};

const KidneyPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ defaultValues: KidneyInitialState });
	const navigate = useNavigate();
	const onSubmitHandler = (data: typeof KidneyInitialState) => {
		console.log(data);
		console.log(errors);
		navigate('/results', { state: { chance: 0.2, message: 'Kidney' } });
	};
	return (
		<div className='w-1/3 mx-auto'>
			<Link
				to='/'
				className='border-2 border-gray-300 rounded-lg transition-all duration-200 hover:border-primary-500 py-1.5 px-4 text-xs'>
				Go back
			</Link>
			<h1 className='mt-5 text-3xl text-center'>Kidney Form</h1>
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
								value: 1,
								message: 'Value must be greater than 1',
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
						htmlFor='blood_pressure'
						className='block mb-2 text-sm font-medium'>
						Blood Pressure
					</label>
					<input
						type='number'
						id='blood_pressure'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='53.9'
						step={0.1}
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
						htmlFor='specific_gravity'
						className='block mb-2 text-sm font-medium'>
						Specific Gravity
					</label>
					<input
						type='number'
						id='specific_gravity'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='1.015'
						step={0.005}
						{...register('specific_gravity', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['specific_gravity'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['specific_gravity'].message}
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
						placeholder='4'
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
						htmlFor='sugar'
						className='block mb-2 text-sm font-medium'>
						Sugar
					</label>
					<input
						type='number'
						id='sugar'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='3'
						{...register('sugar', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['sugar'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['sugar'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='red_blood_cells'
						className='block mb-2 text-sm font-medium'>
						Red Blood Cells Level
					</label>
					<select
						id='red_blood_cells'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('red_blood_cells', {
							required: 'Value is required',
						})}>
						<option value=''>Select red blood cells level</option>
						<option value='normal'>Normal</option>
						<option value='abnormal'>Abnormal</option>
					</select>
					{errors && errors['red_blood_cells'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['red_blood_cells'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='pus_cells'
						className='block mb-2 text-sm font-medium'>
						Pus Cells Level
					</label>
					<select
						id='pus_cells'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('pus_cells', {
							required: 'Value is required',
						})}>
						<option value=''>Select pus cells level</option>
						<option value='normal'>Normal</option>
						<option value='abnormal'>Abnormal</option>
					</select>
					{errors && errors['pus_cells'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['pus_cells'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='pus_cell_clumps'
						className='block mb-2 text-sm font-medium'>
						Pus Cell Clumps
					</label>
					<select
						id='pus_cell_clumps'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('pus_cell_clumps', {
							required: 'Value is required',
						})}>
						<option value=''>Select pus cell clumps status</option>
						<option value='present'>Present</option>
						<option value='absent'>Absent</option>
					</select>
					{errors && errors['pus_cell_clumps'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['pus_cell_clumps'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='bacteria'
						className='block mb-2 text-sm font-medium'>
						Bacteria
					</label>
					<select
						id='bacteria'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('bacteria', {
							required: 'Value is required',
						})}>
						<option value=''>Select bacteria status</option>
						<option value='present'>Present</option>
						<option value='absent'>Absent</option>
					</select>
					{errors && errors['bacteria'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['bacteria'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='blood_glucose_random'
						className='block mb-2 text-sm font-medium'>
						Blood Glucose Random
					</label>
					<input
						type='number'
						id='blood_glucose_random'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='118'
						{...register('blood_glucose_random', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['blood_glucose_random'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['blood_glucose_random'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='blood_urea'
						className='block mb-2 text-sm font-medium'>
						Blood Urea
					</label>
					<input
						type='number'
						id='blood_urea'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='36'
						{...register('blood_urea', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['blood_urea'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['blood_urea'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='serum_creatinine'
						className='block mb-2 text-sm font-medium'>
						Serum Creatinine
					</label>
					<input
						type='number'
						id='serum_creatinine'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='1.7'
						step={0.1}
						{...register('serum_creatinine', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['serum_creatinine'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['serum_creatinine'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='sodium'
						className='block mb-2 text-sm font-medium'>
						Sodium
					</label>
					<input
						type='number'
						id='sodium'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='117'
						{...register('sodium', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['sodium'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['sodium'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='potassium'
						className='block mb-2 text-sm font-medium'>
						Potassium
					</label>
					<input
						type='number'
						id='potassium'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='1.7'
						step={0.1}
						{...register('potassium', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['potassium'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['potassium'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='hemoglobin'
						className='block mb-2 text-sm font-medium'>
						Hemoglobin
					</label>
					<input
						type='number'
						id='hemoglobin'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='15.2'
						step={0.1}
						{...register('hemoglobin', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['hemoglobin'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['hemoglobin'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='packed_cell_volume'
						className='block mb-2 text-sm font-medium'>
						Packed Cell Volume
					</label>
					<input
						type='number'
						id='packed_cell_volume'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='15'
						{...register('packed_cell_volume', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['packed_cell_volume'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['packed_cell_volume'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='white_blood_cell_count'
						className='block mb-2 text-sm font-medium'>
						White Blood Cell Count
					</label>
					<input
						type='number'
						id='white_blood_cell_count'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='6700'
						step={50}
						{...register('white_blood_cell_count', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['white_blood_cell_count'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['white_blood_cell_count'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='red_blood_cell_count'
						className='block mb-2 text-sm font-medium'>
						Red Blood Cell Count
					</label>
					<input
						type='number'
						id='red_blood_cell_count'
						className='border-2 border-gray-300 rounded-lg focus:border-primary-500 outline-none transition-all duration-200 block w-full p-2.5 bg-transparent'
						placeholder='6.0'
						step={0.1}
						{...register('red_blood_cell_count', {
							required: true,
							valueAsNumber: true,
							min: {
								value: 0,
								message: 'Value must be greater than 0',
							},
						})}
					/>
					{errors && errors['red_blood_cell_count'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['red_blood_cell_count'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='hypertension'
						className='block mb-2 text-sm font-medium'>
						Hypertension
					</label>
					<select
						id='hypertension'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('hypertension', {
							required: 'Value is required',
						})}>
						<option value=''>Select hypertension status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['hypertension'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['hypertension'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='diabetes_mellitus'
						className='block mb-2 text-sm font-medium'>
						Diabetes Mellitus
					</label>
					<select
						id='diabetes_mellitus'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('diabetes_mellitus', {
							required: 'Value is required',
						})}>
						<option value=''>
							Select diabetes mellitus status
						</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['diabetes_mellitus'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['diabetes_mellitus'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='coronary_artery_disease'
						className='block mb-2 text-sm font-medium'>
						Coronary Artery Disease
					</label>
					<select
						id='coronary_artery_disease'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('coronary_artery_disease', {
							required: 'Value is required',
						})}>
						<option value=''>
							Select coronary artery disease status
						</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['coronary_artery_disease'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['coronary_artery_disease'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='appetite'
						className='block mb-2 text-sm font-medium'>
						Appetite
					</label>
					<select
						id='appetite'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('appetite', {
							required: 'Value is required',
						})}>
						<option value=''>Select appetite status</option>
						<option value='good'>Good</option>
						<option value='poor'>Poor</option>
					</select>
					{errors && errors['appetite'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['appetite'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='pedal_edema'
						className='block mb-2 text-sm font-medium'>
						Pedal Edema
					</label>
					<select
						id='pedal_edema'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('pedal_edema', {
							required: 'Value is required',
						})}>
						<option value=''>Select pedal edema status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['pedal_edema'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['pedal_edema'].message}
						</p>
					)}
				</div>
				<div>
					<label
						htmlFor='anemia'
						className='block mb-2 text-sm font-medium'>
						Anemia
					</label>
					<select
						id='anemia'
						className='border-2 bg-black border-gray-300 text-sm outline-none rounded-lg focus:border-primary-500 block w-full p-2.5 transition-all duration-200'
						{...register('anemia', {
							required: 'Value is required',
						})}>
						<option value=''>Select anemia status</option>
						<option value='yes'>Yes</option>
						<option value='no'>No</option>
					</select>
					{errors && errors['anemia'] && (
						<p className='mt-0.5 text-sm text-red-400'>
							{errors['anemia'].message}
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

export default KidneyPage;
