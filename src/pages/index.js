import React from "react"
import { Link } from "gatsby"

export default () => (
    <div style={{ color: `purple`}}>
        <h1>Hello Gatsby!</h1>
        <p>What a world!</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <div>
            <Link to="blog.rubberduckdestroyer.dev">blog</Link>
        </div>

    </div>
  )