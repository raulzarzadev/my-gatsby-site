import * as React from 'react'
import { Link } from "gatsby"

const Layout = ({ pageTitle, children }) => {
	return (
		<div>
			<title>
				{pageTitle}
			</title>
			<div>
				first
				<nav>
					<ul>
						<li>
							<Link to="/home">
								Home
							</Link>
						</li>
						<li>
							<Link to="/about">
								About
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			<main>
				{children}
			</main>
		</div>
	)
}

export default Layout