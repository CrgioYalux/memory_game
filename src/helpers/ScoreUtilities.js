export const scoreReducer = (state, action) => {
	switch (action.type) {
		case 'win':
			return {
				score: {
					...state.score,
					wins: [
						...state.score.wins,
						{ difficulty: action.difficulty, time: action.time },
					],
				},
			};
		case 'lose':
			return {
				score: {
					...state.score,
					loses: [
						...state.score.loses,
						{ difficulty: action.difficulty, time: action.time },
					],
				},
			};
		default:
			throw new Error();
	}
};
