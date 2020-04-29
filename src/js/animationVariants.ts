export const hero = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
	exit: {
		opacity: 0,
	},
};

export const dialogFade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		opacity: 0,
	},
};

export const dialogFall = {
	hidden: { y: "-60%", x: "-50%" },
	show: {
		y: "-50%",
		transition: {
			duration: 0.3,
		},
	},
	exit: {
		y: "20%",
	},
};

export const regularItem = {
	hidden: { x: -20, opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
		},
	},
	exit: {
		x: 20,
		opacity: 0,
		transition: {
			duration: 0.5,
			staggerChildren: 0.1,
		},
	},
};

export const largeItemVariant = {
	initial: { x: -20, opacity: 0 },
	enter: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
		},
	},
	exit: {
		x: -20,
		opacity: 0,
		transition: { duration: 0.5 },
	},
};
