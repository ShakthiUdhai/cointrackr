import React from 'react'
import homeStore from '../stores/homeStore'
import { Link } from 'react-router-dom'
import Listitem from '../components/Listitem'
import Header from '../components/Header'
import classNames from 'classnames'

export default function Home() {
    
    const store = homeStore()

    React.useEffect(()=>{
        if(store.trending.length ===0)store.fetchCoins( )
        

  },[])


  return (
    <div>
        <Header />
        <header>
            <div className='width'>
            <h2 className='heading'>Search for a coin</h2>
            <div className={classNames('home-search-input' , {searching:store.searching,})}>
                <input type ="text" value={store.query} onChange={store.setQuery}/> 
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" width="20"><path fill='currentColor' d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"/></svg>
            </div>
            </div>        
        </header>
        <div className="home-cryptos">
            <div className='width'>
                <h2 className='heading'>{store.searched ? 'Search Results' : 'Trending Coins'}</h2>
                <div className='home-cryptos-list'>
                {store.coins.map(coin =>{
                    return(
                        <Listitem key={coin.id} coin = {coin} /> 
                        

                    )
                })}
                </div>
            </div>
        </div>
    </div>
  )
}
