import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Countdown extends Component {
	constructor(props) {
		super(props);
		this.countdown = null;
		this.state = {
			countdown: props.countDownFrom + 2,
			finished: !props.shouldInitOnMount,
			started: false
		};
	}

	componentDidMount() {
		if (this.props.shouldInitOnMount) {
			this.countdown = this.countdownInit();
		}
	}

	componentDidUpdate() {
		// shouldInitOnMount
		if (this.props.activate && this.countdown == null) {
			clearInterval(this.countdown);
			this.countdown = this.countdownInit();
		}
	}

	countdownInit = () => {
		return setInterval(() => {
			if (this.state.countdown > 0) {
				this.setState(({ countdown }) => ({
					countdown: countdown - 1,
					started: true,
					finished: false
				}));
			} else {
				clearInterval(this.countdown);
				this.countdown = null;
				this.setState({ finished: true });
				this.props.onCountdownEnd();
			}
		}, 1000);
	};

	componentWillUnmount() {
		if (this.countdown) {
			clearInterval(this.countdown);
		}
	}

	render() {
		const { countdownEndText, countDownFrom } = this.props;
		const { countdown, started, finished } = this.state;

		if (!this.countdown || finished) return null;

		return (
			<div className="countdown-container">
				<TransitionGroup>
					<CSSTransition key={countdown} timeout={{ enter: 450, exit: 170 }} classNames="countdown">
						<React.Fragment>
							{started && countdown <= countDownFrom && (
								<div className="countdown-number">
									{countdown == 0 ? countdownEndText : countdown}
								</div>
							)}
						</React.Fragment>
					</CSSTransition>
				</TransitionGroup>
			</div>
		);
	}
}

export default Countdown;
