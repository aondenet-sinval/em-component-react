import React from 'react'
import Login from './login'
import User from './user'
import Cliente from './cliente'

const Home = ()=>{
  return(<React.Fragment>
    <Login />
    <User />
    <Cliente />
    </React.Fragment>
  )
}
export default Home
