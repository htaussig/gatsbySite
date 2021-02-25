import * as React from "react"

import "/src/styles/global.css"
import BookNote from "/src/components/BookNote"

//var bookCover = require('/src/images/BookCovers/anything.jpg')


export default function Home() {
	return (
	
		<BookNote 
		title="Anything You Want"
		author="Derek Sivers" 
		//bookCoverPath={bookCover}
		rating="9.3/10"
		dateRead="2/11/2021"

		threeSentences="
		1. Is the reason you are actually doing what you're doing — like trying to make your business bigger — because you think it will make you happy or because other people are doing it. 
		\n
		2. The point of a business is to build a little utopia, to do something you enjoy, and to help people in some way that you want to. (AKA to be happy, and seeing money only as a means to that end)
		\n
		3. Valuing the human aspect of everything you do is both more fun and profitable since people want to be treated as people and it is more effective to treat them that way.
		"

		

		/>

	);

	}