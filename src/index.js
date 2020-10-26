import React from 'react';
import ReactDOM from 'react-dom';
import ImageSlider from './ImageSlider';
import Bomb from './Bomb';

ReactDOM.render(
	<fragment>
		<ImageSlider />
		<Bomb initialCount={120} />
	</fragment>,
	document.getElementById('root')
);