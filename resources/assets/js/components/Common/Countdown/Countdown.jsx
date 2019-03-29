import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.countdownInterval = null;
		this.state = {
			countdownNumber: 0
		};
	}

	componentDidUpdate() {
		if (this.props.countdown.show && this.countdownInterval == null) {
			clearInterval(this.countdownInterval);
			this.setState({ countdownNumber: this.props.countdown.countdownFrom });
			this.countdownInterval = this.countdownInit();
		}
	}

	countdownInit = () => {
		return setInterval(() => {
			if (this.state.countdownNumber > 0) {
				this.setState(({ countdownNumber }) => ({
					countdownNumber: countdownNumber - 1
				}));
			} else {
				clearInterval(this.countdownInterval);
				this.countdownInterval = null;
			}
		}, 1000);
	};

	componentWillUnmount() {
		if (this.countdownInterval) {
			clearInterval(this.countdownInterval);
		}
	}

	render() {
		const { countdown } = this.props;
		const { countdownNumber } = this.state;

		if (!countdown.show && !countdown.inProgress) return null;

		return (
			<div className="countdown-container">
				<TransitionGroup>
					<CSSTransition
						key={countdownNumber}
						timeout={{ enter: 450, exit: 170 }}
						classNames="countdown"
					>
						<React.Fragment>
							{countdown.show && countdownNumber <= countdown.countdownFrom && (
								<div className="countdown-number">
									{countdownNumber == 0 ? countdown.countdownEndText : countdownNumber}
								</div>
							)}
						</React.Fragment>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default connect(
	state => ({ countdown: state.countdown }),
	{}
)(Countdown);
