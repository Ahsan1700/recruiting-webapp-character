import React, { useState } from 'react';
import CharacterContainer from './CharacterContainer';

function PartyContainer () {
	// add characters, reset characters, save characters
	const [charNum, setCharNum] = useState(1);

	return(
		<div>
			<button onClick={() => setCharNum(prev => prev + 1)}>Add Character</button>
			<button onClick={() => setCharNum(prev => prev - 1)}>Remove Character</button>
			{Array(charNum).fill(0).map((_,i) => <CharacterContainer/>)}
		</div>
	);
}

export default PartyContainer;