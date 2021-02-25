import * as React from "react"

import "/src/styles/global.css"
import Head from "/src/components/head"
import Header from "/src/components/header"
import BlogFooter from "/src/components/blogFooter"
import BlogPostInfo from "/src/components/blogPostInfo"


export default function Home() {
	return (
<div>

	<Head title="Writing" />
	<Header />

    <div id="bookDiv">

		<h2>Why I Write</h2>

		<BlogPostInfo text="
		Date Posted: 2/14/2021		
		"/>

        <p>
        {/* <!-- Write here --> */}
        

		{/* <!-- Write here --> */}
 		</p>

		
		<BlogFooter />
		
	</div>
   
</div>


	);
}