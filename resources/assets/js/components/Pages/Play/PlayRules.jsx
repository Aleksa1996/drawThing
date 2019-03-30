import React from 'react';

import { Link } from 'react-router-dom';

const PlayRules = props => {
	return (
		<div className="game-start-rules-container">
			<div>
				<h2 className="game-start-rules-heading">Drawthing Info</h2>
				<p className="game-start-rules-text special-text">
					This is a very addictive multiplayer game which is suitable for everyone who loves art. No
					matter who you are, whether you are good or bad at drawing, you can still enjoy the game
					and have the fun time.
				</p>

				<ul className="game-start-rules-list">
					<li>
						<h4> Draw your avatar</h4>
						<p className="special-text">
							Your first step is to draw your avatar on canvas, personalize your avatar however you
							wish. Next to avatar canvas, you have field for your username. Just type in your
							username there, and you are good to go!
						</p>
					</li>
					<li>
						<h4> Create / Join room</h4>
						<p className="special-text">
							Choose whether you want to create private room, and invite your friends or you want to
							play in a public room. Note that if you choose to create private room, you will
							automatically become room admin, so you can control which players may play and which
							don't.
						</p>
					</li>
					<li>
						<h4> Draw / Guess</h4>
						<p className="special-text">
							Finally, the game starts! After the countdown is over, one random player needs to
							choose 1 out of 3 words. Game round begins, your concentration to the maximum. You
							need to guess what others draw or to draw chosen word. For better score you need to do
							that as fast as possible, or you will loose!
						</p>
						<p>Notices:</p>
						<ol className="mb-3">
							<li>dasdad</li>
						</ol>
					</li>

					<li>
						<h4>Bugs, bugs and bugs... if you see one </h4>
						<p className="special-text">
							You can send me a message through out contact form on <Link to="/contact">this</Link>
							&nbsp; page, or you can contact me via
							<span
								dangerouslySetInnerHTML={{
									__html:
										'&nbsp; &#97;&#108;&#101;&#107;&#115;&#97;.j.&#49;&#57;96&#64;&#103;m&#97;&#105;l&#46;&#99;&#111;&#109;'
								}}
							/>
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default PlayRules;
