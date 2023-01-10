
const Cocktails = ( {data} ) => {

    return (
        <div className="cocktails-card">
           <img src={data.strDrinkThumb} alt="" />
           <div className="content">    
                <h2>{data.strDrink}</h2>
                <h4>{data.strInstructions}</h4>
           </div>
           
        </div>
    )

}

export default Cocktails