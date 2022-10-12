import React from 'react'

const List = ({list}) => {
    return(<>
    <h2>{list.name}</h2>
    
    {
    (list.recipes.length>0)?
    list.recipes.map(r=>{
      return(
      <>
      <h3>{r.name}</h3>
      <img className="fontimg" src={r.image} alt ='recipe' width={300}/>
      {r.diets? r.diets.map(d=><span>{d.name}</span>): null}
      </>
      )
    })
  :(<span>This list don't have recipes</span>)
  }
  </>
  )
}

export default List