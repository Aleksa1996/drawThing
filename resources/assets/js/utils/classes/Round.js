import Model from './Model';

export default class Round extends Model {
	getSeconds = () => Math.floor((this.duration % (1000 * 60)) / 1000);
	getMinutes = () => Math.floor((this.duration % (1000 * 60 * 60)) / (1000 * 60));
	getMinutesAndSecondsWithLeadingZeros = () => {
		const minutes = this.getMinutes();
		const seconds = this.getSeconds();

		return (
			(minutes < 10 ? '0' : '') +
			(minutes < 0 ? '0' : minutes) +
			':' +
			(seconds < 10 ? '0' : '') +
			(seconds < 0 ? '0' : seconds)
		);
	};
}
