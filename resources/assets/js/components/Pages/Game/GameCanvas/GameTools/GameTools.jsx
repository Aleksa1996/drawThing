import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Draggable from 'react-draggable';

import {
	Pencil,
	TOOL_PENCIL,
	Line,
	TOOL_LINE,
	Ellipse,
	TOOL_ELLIPSE,
	Rectangle,
	TOOL_RECTANGLE
} from '../../GameCanvas/SketchPad/SketchPadTools';

import { capitalize as _capitalize } from 'lodash';

class GameTools extends Component {
	constructor(props) {
		super(props);

		this.state = {
			show: props.show,
			defaultPosition: props.defaultPosition
		};

		this.toolsMap = [
			{ toolText: [TOOL_PENCIL], tool: Pencil },
			{ toolText: [TOOL_LINE], tool: Line },
			{ toolText: [TOOL_RECTANGLE], tool: Rectangle },
			{ toolText: [TOOL_ELLIPSE], tool: Ellipse }
		];
	}

	static propTypes = {
		show: PropTypes.bool,
		defaultPosition: PropTypes.shape({
			x: PropTypes.number,
			y: PropTypes.number
		})
	};

	static defaultProps = {
		show: false,
		defaultPosition: { x: 0, y: 0 }
	};

	handleShow = e => {
		this.setState(prevState => ({ show: !prevState.show }));
	};

	handleToolLocally = e => {
		let { name, value } = e.target;

		if (name == 'size') value = parseInt(value);

		this.props.handleTool({ name, value });
	};

	render() {
		const { defaultPosition, show } = this.state;
		const { tool, size, color, fillColor } = this.props;
		return (
			<Draggable
				axis="both"
				handle=".game-tools-handle"
				defaultPosition={defaultPosition}
				position={null}
				scale={1}
				// onStart={this.handleStart}
				// onDrag={this.handleDrag}
				// onStop={this.handleStop}
			>
				<div className="game-tools-container shadow rounded">
					<div className="game-tools-handle d-flex justify-content-between align-items-baseline rounded">
						<span>
							<i className="fa fa-wrench" aria-hidden="true" />
							Available tools
						</span>
						<div className="game-tools-header-icons">
							<i className="fa fa-arrows" aria-hidden="true" />
							<i
								onClick={this.handleShow}
								className={`fa ${show ? 'fa-eye-slash' : 'fa-eye'} `}
								aria-hidden="true"
								style={{ cursor: 'pointer' }}
							/>
						</div>
					</div>
					<form style={{ display: show ? 'block' : 'none' }}>
						<div className="form-group">
							<label htmlFor="tool">Drawing tool</label>
							<select
								onChange={this.handleToolLocally}
								value={tool}
								className="custom-select"
								name="tool"
								id="tool"
							>
								{this.toolsMap.map(tm => (
									<option key={tm.toolText} value={tm.toolText}>
										{_capitalize(tm.toolText)}
									</option>
								))}
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="size">Weight</label>
							<input
								onChange={this.handleToolLocally}
								type="range"
								className="custom-range"
								name="size"
								id="size"
								value={size}
							/>
						</div>

						<div className="form-group">
							<label htmlFor="tool_color">Color</label>
							<input
								onChange={this.handleToolLocally}
								type="color"
								value={color}
								className="form-control"
								name="color"
								id="color"
							/>
						</div>

						<div className="form-group">
							<label htmlFor="fillColor">Fill color</label>
							<input
								onChange={this.handleToolLocally}
								type="color"
								value={fillColor}
								className="form-control"
								name="fillColor"
								id="fillColor"
							/>
						</div>

						<div className="game-tools-buttons">
							<button
								onClick={this.handleToolLocally}
								type="button"
								className="mybtn2"
								name="eraser"
								value="eraser"
							>
								<i className="fa fa-eraser mr-2" aria-hidden="true" />
								Eraser
							</button>
							<button
								onClick={this.handleToolLocally}
								type="button"
								className="mybtn2"
								name="clear"
								value="clear"
							>
								<i className="fa fa-times mr-2" aria-hidden="true" />
								Clear all
							</button>
						</div>
					</form>
				</div>
			</Draggable>
		);
	}
}

export default GameTools;
