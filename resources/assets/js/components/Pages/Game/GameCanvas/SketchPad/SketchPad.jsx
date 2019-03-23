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
		debounceTime: PropTypes.number,
		canvasDisabled: PropTypes.bool
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
		eraser: false,
		canvasDisabled: false
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

		this.canvasContainer = React.createRef();
	}

	componentDidMount() {
		this.canvas = findDOMNode(this.canvasRef);
		this.ctx = this.canvas.getContext('2d');
		this.initTool(this.state.tool);
	}

	componentDidUpdate({ tool, items }, prevState) {
		if (this.props.items.length != items.length) {
			this.redraw(this.props.items, this.props.animate && this.props.items.length > items.length);
		}
	}

	initTool = tool => (this.toolObj = this.props.toolsMap[tool](this.ctx));

	clearCanvas = () => this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

	redraw = (items, animate) => {
		this.clearCanvas();
		const copiedItems = items.slice();
		const lastCopiedItem = copiedItems.pop();

		copiedItems.forEach(item => {
			this.initTool(item.tool);
			this.toolObj.draw(item, false);
		});

		if (lastCopiedItem) {
			this.initTool(lastCopiedItem.tool);
			this.toolObj.draw(lastCopiedItem, animate);
		}
	};

	onMouseDown = e => {
		if (this.props.canvasDisabled) return;
		const { onItemStart, onDebouncedItemChange, debounceTime } = this.props;
		let { color, size, fillColor, eraser, tool } = this.state;

		this.initTool(tool);

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
		if (this.props.canvasDisabled) return;
		const data = this.toolObj.onMouseMove(...this.getCursorPosition(e));
		data &&
			data[0] &&
			this.props.onEveryItemChange &&
			this.props.onEveryItemChange.apply(null, data);
	};

	onMouseUp = e => {
		if (this.props.canvasDisabled) return;
		const data = this.toolObj.onMouseUp(...this.getCursorPosition(e));
		data && data[0] && this.props.onCompleteItem && this.props.onCompleteItem.apply(null, data);
		if (this.props.onDebouncedItemChange) {
			clearInterval(this.interval);
			this.interval = null;
		}
	};

	getCursorPosition = e => {
		// https://stackoverflow.com/questions/17130395/real-mouse-position-in-canvas
		const rect = this.canvas.getBoundingClientRect();
		const scaleX = this.canvas.width / rect.width;
		const scaleY = this.canvas.height / rect.height;

		return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
	};

	handleTool = ({ name, value }) => {
		if (name == 'eraser') {
			this.setState(prevState => ({ eraser: !prevState.eraser }));
		} else if (name == 'clear') {
			this.props.onClear();
		} else if (name == 'undo') {
			this.props.onUndo();
		} else {
			this.setState({ [name]: value });
		}
	};

	render() {
		const { width, height, canvasClassName, children, gtShow, gtDefaultPosition } = this.props;
		const { tool, size, color, fillColor, eraser } = this.state;
		return (
			<div className="sketchpad-container" ref={this.canvasContainer} style={{ height: '100%' }}>
				{!this.props.canvasDisabled && (
					<GameTools
						defaultPosition={gtDefaultPosition}
						show={gtShow}
						handleTool={this.handleTool}
						tool={tool}
						size={size}
						color={color}
						fillColor={fillColor}
						isEraserActive={eraser}
					/>
				)}

				<canvas
					ref={canvas => {
						this.canvasRef = canvas;
					}}
					className={canvasClassName}
					onMouseDown={this.onMouseDown}
					onMouseMove={this.onMouseMove}
					onMouseOut={this.onMouseUp}
					onMouseUp={this.onMouseUp}
					width={642}
					height={642}
					style={{ width: '100%', height: '100%' }}
				/>
				{children}
			</div>
		);
	}
}
