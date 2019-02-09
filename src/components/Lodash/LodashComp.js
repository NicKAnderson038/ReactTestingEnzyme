import React from 'react'
import cloneDeep from 'lodash/cloneDeep'
import classes from './LodashComp.module.css'

const oldObj = {
  name: 'Person 1',
  date: new Date().getFullYear(),
  extra: {
    wish: 'rain',
    weather: [
          {
              clouds: 'dark',
              id: 1,
              extra: {
                  conditions: 'very wet',
                  clothes: 'heavy jacket'
              }
          },
          {
              clouds: 'grey',
              id: 2,
              extra: {
                  conditions: 'little wet',
                  clothes: 'lite jacket'
              }
          }
      ]
  }
}


const lodashComp = () => {

  const newObj = cloneDeep(oldObj)
  newObj.extra.weather[0].extra.clothes = 'umbrella'
  console.log(oldObj)
  console.log(newObj)
  const arg = newObj.extra.weather.map(data => {
    return(<li key={data.id}>{data.clouds}</li>)
  })
  return (
    <div>
      <h6>Name: {newObj.name}</h6>
      <h6>Date: {newObj.date}</h6>
      <div className={classes.main}>
      <ul>
        {arg}
      </ul>
      </div>
    </div>
  )
}
export default lodashComp
