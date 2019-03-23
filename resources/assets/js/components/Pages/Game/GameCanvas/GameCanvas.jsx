import React, { Component } from 'react';
import SketchPad from './SketchPad/SketchPad';

class GameCanvas extends Component {
	render() {
		const { onCompleteItem, onUndo, onClear, sketchpadRef, ...sketchpad } = this.props;
		return (
			<div className="col-md-6 order-1 order-md-2 my-md-0 my-3 px-md-3">
				<div className="game-board-container-center">
					<div className="game-board-sketchpad shadow rounded">
						<SketchPad
							{...sketchpad}
							onCompleteItem={onCompleteItem}
							onUndo={onUndo}
							onClear={onClear}
							ref={sketchpadRef}
							gtDefaultPosition={{ x: 0, y: -61 }}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default GameCanvas;
