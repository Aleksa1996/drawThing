import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import {
	Pencil,
	TOOL_PENCIL,
	Line,
	TOOL_LINE,
	Ellipse,
	TOOL_ELLIPSE,
	Rectangle,
	TOOL_RECTANGLE
} from './SketchPadTools';

import GameTools from '../GameTools/GameTools';

export const toolsMap = {
	[TOOL_PENCIL]: Pencil,
	[TOOL_LINE]: Line,
	[TOOL_RECTANGLE]: Rectangle,
	[TOOL_ELLIPSE]: Ellipse
};

export default class SketchPad extends Component {
	static propTypes = {
		width: PropTypes.number,
		height: PropTypes.number,
		items: PropTypes.array.isRequired,
		animate: PropTypes.bool,
		canvasClassName: PropTypes.string,
		color: PropTypes.string,
		fillColor: PropTypes.string,
		size: PropTypes.number,
		tool: PropTypes.string,
		toolsMap: PropTypes.object,
		onItemStart: PropTypes.func, // function(stroke:Stroke) { ... }
		onEveryItemChange: PropTypes.func, // function(idStroke:string, x:number, y:number) { ... }
		onDebouncedItemChange: PropTypes.func, // function(idStroke, points:Point[]) { ... }
		onCompleteItem: PropTypes.func, // function(stroke:Stroke) { ... }
		debounceTime: PropTypes.number
	};

	static defaultProps = {
		width: 500,
		height: 500,
		color: '#000',
		size: 5,
		fillColor: '',
		canvasClassName: 'canvas',
		debounceTime: 1000,
		animate: true,
		tool: TOOL_PENCIL,
		toolsMap,
		eraser: false
	};

	constructor(props) {
		super(props);

		this.state = {
			tool: props.tool,
			size: props.size,
			color: props.color,
			fillColor: props.fillColor,
			eraser: false
		};

		this.toolObj = null;
		this.nterval = null;
	}

	componentDidMount() {
		this.canvas = findDOMNode(this.canvasRef);
		this.ctx = this.canvas.getContext('2d');
		this.initTool(this.state.tool);
	}

	componentDidUpdate({ tool, items }) {
		if (this.props.items.length !== 0) {
			items
				.filter(item => this.props.items.indexOf(item) === -1)
				.forEach(item => {
					this.initTool(item.tool);
					this.toolObj.draw(item, this.props.animate);
				});
		}

		this.initTool(this.state.tool);
	}

	initTool = tool => {
		this.toolObj = this.props.toolsMap[tool](this.ctx);
	};

	clear = () => {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	};

	onMouseDown = e => {
		const { onItemStart, onDebouncedItemChange, debounceTime } = this.props;
		let { color, size, fillColor, eraser } = this.state;

		if (eraser) {
			this.initTool(TOOL_PENCIL);
			color = '#ffffff';
			size = 20;
		}

		const data = this.toolObj.onMouseDown(...this.getCursorPosition(e), color, size, fillColor);
		data && data[0] && onItemStart && onItemStart.apply(null, data);
		if (onDebouncedItemChange) {
			this.interval = setInterval(this.onDebouncedMove, debounceTime);
		}
	};

	onDebouncedMove = () => {
		if (
			typeof this.toolObj.onDebouncedMouseMove == 'function' &&
			this.props.onDebouncedItemChange
		) {
			this.props.onDebouncedItemChange.apply(null, this.toolObj.onDebouncedMouseMove());
		}
	};

	onMouseMove = e => {
		const data = this.toolObj.onMouseMove(...this.getCursorPosition(e));
		data &&
			data[0] &&
			this.props.onEveryItemChange &&
			this.props.onEveryItemChange.apply(null, data);
	};

	onMouseUp = e => {
		const data = this.toolObj.onMouseUp(...this.getCursorPosition(e));
		data && data[0] && this.props.onCompleteItem && this.props.onCompleteItem.apply(null, data);
		if (this.props.onDebouncedItemChange) {
			clearInterval(this.interval);
			this.interval = null;
		}
	};

	getCursorPosition = e => {
		const { top, left } = this.canvas.getBoundingClientRect();
		return [e.clientX - left, e.clientY - top];
	};

	handleTool = ({ name, value }) => {
		if (name == 'eraser') {
			this.setState(prevState => ({ eraser: !prevState.eraser }));
		} else if (name == 'clear') {
			this.clear();
		} else {
			this.setState({ [name]: value });
		}
	};

	render() {
		const { width, height, canvasClassName, children, gtShow, gtDefaultPosition } = this.props;
		const { tool, size, color, fillColor } = this.state;
		return (
			<React.Fragment>
				<GameTools
					defaultPosition={gtDefaultPosition}
					show={gtShow}
					handleTool={this.handleTool}
					tool={tool}
					size={size}
					color={color}
					fillColor={fillColor}
				/>
				<canvas
					ref={canvas => {
						this.canvasRef = canvas;
					}}
					className={canvasClassName}
					onMouseDown={this.onMouseDown}
					onMouseMove={this.onMouseMove}
					onMouseOut={this.onMouseUp}
					onMouseUp={this.onMouseUp}
					width={width}
					height={height}
				/>
				{children}
			</React.Fragment>
		);
	}
}
