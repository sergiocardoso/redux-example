import { createStore } from 'redux';

const INITIAL_STATE = {
	activeLesson: {},
	activeModule: {},
	nameVideo: 'nome via Redux',
	modules: [
		{
			id: 1,
			title: 'Iniciando com React',
			lessons: [ { id: 1, title: 'Primeira Aula' }, { id: 2, title: 'Segunda Aula' } ]
		},
		{
			id: 2,
			title: 'Segundo Modulo',
			lessons: [ { id: 3, title: 'Terceira Aula' }, { id: 4, title: 'Quarta Aula' } ]
		}
	]
};

export default function course(state = INITIAL_STATE, action) {
	if (action.type === 'TOGGLE_LESSON') {
		return { ...state, activeLesson: action.lesson, activeModule: action.module };
	}
	console.log('VER ACTION', action);
	if (action.type === 'CHANGE_NAME_VIDEO') {
		return { ...state, nameVideo: action.name };
	}
	return state;
}

const store = createStore(course);
