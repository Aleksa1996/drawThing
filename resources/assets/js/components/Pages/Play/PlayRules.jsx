import React from 'react';

const PlayRules = props => {
	return (
		<div className="game-start-rules-container">
			<h2 className="game-start-rules-heading">Game Rules</h2>
			<p className="game-start-rules-text">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
				galley of type and scrambled it to make a type specimen book. It has survived not only five
				centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
				It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
				passages, and more recently with desktop publishing software like Aldus PageMaker including
				versions of Lorem Ipsum.
			</p>

			<ul>
				<li>Rule 1</li>
				<li>Rule 2</li>
				<li>Rule 3</li>
				<li>Rule 4</li>
				<li>Rule 5</li>
			</ul>
		</div>
	);
};

export default PlayRules;
