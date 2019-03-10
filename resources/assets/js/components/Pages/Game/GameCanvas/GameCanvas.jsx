import React, { Component } from 'react';

import SketchPad from './SketchPad/SketchPad';

class GameCanvas extends Component {
	render() {
		const { onCompleteItem, onUndo, onClear, sketchpadRef, ...sketchpad } = this.props;
		return (
			<div className="col-md-6">
				<div className="game-board-container-center">
					<div className="game-board-sketchpad shadow rounded">
						<SketchPad
							{...sketchpad}
							onCompleteItem={onCompleteItem}
							onUndo={onUndo}
							onClear={onClear}
							ref={sketchpadRef}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default GameCanvas;
