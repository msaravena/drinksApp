import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Cocktails from './components/Cocktails'


function App() {

  const [ dataDrinks, setDataDrinks ] = useState( [] )
  const [ drink, setDrink ] = useState("margarita")

  useEffect( () => {

    getData()

  }, [drink])

  const searchDrink = (e) => {
    
    e.preventDefault()
    setDrink(e.target[0].value.toLowerCase())

  }

  const getData = () => {
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then( resp => {
      console.log(resp.data.drinks)
      setDataDrinks(resp.data.drinks)
    })
    .catch( error => console.error(error))

  }

  return (

   
      <div className="App">
      <div className='form-container'>
          <form onSubmit={ (e) => searchDrink(e) }>
            <input type="text" placeholder="buscar bebida" />
            <button type="submit"><i className='bx bx-drink'></i></button>
          </form>
      </div>
      <div className='drinks-container'>
            {
             dataDrinks?
              dataDrinks.map( (drink, index) => 
              <Cocktails 
              key={`drink-${index}`}
              data={drink}
              /> )
              :
              <div>                
                <h1>Este trago no existe</h1>
                <img src="/pngegg.png" alt="" style={{width: 300}}/>
              </div>
              
             
            } 

      </div>
      
           
      

    </div>
    
    
  )
}

export default App
