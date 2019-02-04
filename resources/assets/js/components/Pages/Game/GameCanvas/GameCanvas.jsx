import React, { Component } from 'react';

import SketchPad from './SketchPad/SketchPad';

import { TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from './SketchPad/SketchPadTools';

class GameCanvas extends Component {
	state = {
		tool: TOOL_PENCIL,
		size: 2,
		color: '#000000',
		fill: false,
		fillColor: '#444444',
		items: []
	};

	handleOnCompleteItem = item => {
		console.log(item);
	};

	render() {
		const { tool, size, color, fill, fillColor, items } = this.state;
		return (
			<div className="col-md-6">
				<div className="game-board-container-center">
					<div className="game-board-sketchpad shadow rounded">
						<SketchPad
							width={900}
							height={700}
							animate={true}
							size={size}
							color={color}
							fillColor={fill ? fillColor : ''}
							items={items}
							tool={tool}
							onCompleteItem={this.handleOnCompleteItem}
							canvasClassName="game-board-sketchpad-canvas"
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default GameCanvas;
