import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
// import IconLinks from "../../components/iconLinks"

export default function Home() {
	return (

	<div>
		<Head title="Writing" />
		<Header />

		<div id="bookDiv">
			<div>
				<h2><u>Writing</u></h2>
			<br></br>
			</div>

			<div class="blogPostList">
				{/* <!-- <a href="whyIWrite/">Why I Write</a> 
				</br></br> --> */}
				<a href="internetHumans/">The Internet is Full of Humans</a> 
				<br></br><br></br>
				<a href="vipassana/">Only Meditating for 10 days</a>
			</div>
		</div>

	
	</div>

	);
}