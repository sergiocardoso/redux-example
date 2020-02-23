import React from 'react';
import { connect } from 'react-redux';
import * as VideoActions from './../../store/actions/videoName';

let inputRef = React.createRef();
const Video = ({ activeModule, activeLesson, changeNameVideo }) => {
	return (
		<div>
			<strong>Modulo {activeModule.title}</strong>
			<span>Aula {activeLesson.title}</span>
			<input type="text" ref={inputRef} placeholder="digite algo..." />
			<button
				onClick={() => {
					changeNameVideo();
				}}
			>
				mudar nome do video
			</button>
		</div>
	);
};

const mapStateToProps = (state) => ({
	activeLesson: state.course.activeLesson,
	activeModule: state.course.activeModule
});

const mapDispatchToProps = (dispatch) => ({
	changeNameVideo: () => dispatch(VideoActions.changeNameVideo(inputRef.current.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
