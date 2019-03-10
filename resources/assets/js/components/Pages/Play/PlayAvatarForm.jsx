import React from 'react';
import SketchPad from '../Game/GameCanvas/SketchPad/SketchPad';

const PlayAvatarForm = ({
	onCompleteDrawing,
	onUndo,
	onClear,
	sketchpadRef,
	valid,
	errors,
	...avatarForm
}) => {
	return (
		<div className="game-start-canvas-container">
			<SketchPad
				{...avatarForm}
				onCompleteItem={onCompleteDrawing}
				onUndo={onUndo}
				onClear={onClear}
				canvasClassName="game-start-canvas rounded"
				ref={sketchpadRef}
			>
				<small
					className={`help-text d-block text-center ${
						!errors.avatar && valid ? '' : 'text-danger'
					}`}
				>
					{!errors.avatar && valid ? null : (
						<i className="fa fa-exclamation-circle mr-2" aria-hidden="true" />
					)}
					{errors.avatar && valid ? errors.avatar : 'Draw your avatar'}
				</small>
			</SketchPad>
		</div>
	);
};

export default PlayAvatarForm;
