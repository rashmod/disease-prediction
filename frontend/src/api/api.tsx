const randomNum = (max: number, min = 0) => {
	return Math.floor(Math.random() * (max - min) + min);
};
const randomWait = async () => {
	const delay = randomNum(5000, 1000);
	await new Promise((res) => setTimeout(res, delay));
};

export default randomWait;
