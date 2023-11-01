const getResult = (num: number) => {
	// write function for coin flip with some chance of head dependent on num
	const result = Math.random(); // Generate a random number between 0 and 1
	if (result < num) {
		return 'Yes';
	} else {
		return 'No';
	}
};
export default getResult;
