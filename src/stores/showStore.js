import axios from 'axios'
import { create } from 'zustand'
import debounce from '../helpers/debounce'

const showStore = create((set) => ({
    graphData : [],
    data : [],
    
       
    fetchData:async(id)=>{
        const[graphres,datares]=await Promise.all([axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`),axios.get(`https://api.coingecko.com/api/v3/coins/${id}?market_data=true`)])

       
        const graphData = graphres.data.prices.map(price =>{
            const[timestamp,p]=price;
            const date = new Date(timestamp).toLocaleDateString('en-us')
            return  {
                Date : date,
                Price : p,
              };
        });

        
        set({graphData});
        set({data:datares.data})
        

       
    },
}));

export default showStore; 