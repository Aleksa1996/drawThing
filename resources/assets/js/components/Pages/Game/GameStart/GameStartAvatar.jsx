import React from 'react';

import SketchPad from '../GameCanvas/SketchPad/SketchPad';

const GameStartAvatar = ({ onCompleteDrawing, sketchpadRef, valid, formErrors, ...avatarForm }) => {
	return (
		<div className="game-start-canvas-container">
			<SketchPad
				{...avatarForm}
				onCompleteItem={onCompleteDrawing}
				canvasClassName="game-start-canvas rounded"
				ref={sketchpadRef}
			>
				<small
					className={`help-text d-block text-center ${
						!formErrors.avatar && valid ? '' : 'text-danger'
					}`}
				>
					{!formErrors.avatar && valid ? null : (
						<i className="fa fa-exclamation-circle mr-2" aria-hidden="true" />
					)}
					{formErrors.avatar && valid ? formErrors.avatar : 'Draw your avatar'}
				</small>
			</SketchPad>
		</div>
	);
};

export default GameStartAvatar;
