import React, { Component } from 'react';

import Draggable from 'react-draggable';

class GameTools extends Component {
	state = { show: false };

	handleShow = e => {
		this.setState(prevState => ({ show: !prevState.show }));
	};

	render() {
		return (
			<Draggable
				axis="both"
				handle=".game-tools-handle"
				defaultPosition={{ x: -1, y: -9 }}
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
								className={`fa ${this.state.show ? 'fa-eye-slash' : 'fa-eye'} `}
								aria-hidden="true"
								style={{ cursor: 'pointer' }}
							/>
						</div>
					</div>
					<form style={{ display: this.state.show ? 'block' : 'none' }}>
						<div className="form-group">
							<label htmlFor="tool_pencil">Drawing tool</label>
							<select className="custom-select" id="tool_pencil">
								<option>Pencil</option>
								<option>Rectangle</option>
								<option>Circle</option>
							</select>
						</div>

						<div className="form-group">
							<label htmlFor="tool_weight">Weight</label>
							<input type="range" className="custom-range" id="tool_weight" />
						</div>

						<div className="form-group">
							<label htmlFor="tool_color">Color</label>
							<input type="color" className="form-control" id="tool_color" />
						</div>

						<div className="form-group">
							<label htmlFor="tool_background">Background</label>
							<input type="color" className="form-control" id="tool_background" />
						</div>
					</form>
				</div>
			</Draggable>
		);
	}
}

export default GameTools;
