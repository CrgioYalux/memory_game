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
					losses: [
						...state.score.losses,
						{ difficulty: action.difficulty, time: action.time },
					],
				},
			};
		default:
			throw new Error();
	}
};
