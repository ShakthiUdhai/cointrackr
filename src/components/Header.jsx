import React from 'react'
import { Link } from 'react-router-dom'

export default function header({ back }) {
  return <header className='header'>
    <div className='width'>
      {back && (
      <Link to ="/">
       <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="48"><path fill = "white" d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z"/></svg>
      </Link>
      )}

      <h1><Link to ="/">Coin Trackr</Link></h1>
    </div>
     </header>
}
