import React, {useState} from 'react'
import Login from './login'
import User from './user'
import Cliente from './cliente'
import InputButton from '../components/form-parts/input-button'

const Home = ()=>{
  const [formData, setFormData] = useState({})
  const [login, setLogin] = useState('w3-hide')
  const [user, setUser] = useState('w3-hide')
  const [cliente, setCliente] = useState('w3-hide')
  const changeFormData = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const selectForm = (e)=>{
    console.log(e.target.name);
    const name = e.target.name
    if (name === 'exibirLogin') {
      setUser('w3-hide')
      setLogin('w3-show')
      setCliente('w3-hide')
      setFormData({})
    }
    if (name === 'exibirUser') {
      setUser('w3-show')
      setLogin('w3-hide')
      setCliente('w3-hide')
      setFormData({})
    }
    if (name === 'exibirCliente') {
      setUser('w3-hide')
      setLogin('w3-hide')
      setCliente('w3-show')
      setFormData({})
    }
  }
  return(<React.Fragment>
    <InputButton value="Fazer Login" name="exibirLogin" click={selectForm}/>
    <InputButton value="Cadastrar Usuário" name="exibirUser" click={selectForm}/>
    <InputButton value="Cadastrar Clientes" name="exibirCliente" click={selectForm}/>
    <div className={login}>
      <Login changeFormData={changeFormData} formDataLogin={formData}
       />
    </div>
    <div className={user}>
      <User changeFormData={changeFormData} formDataUser={formData}
       />
    </div>
    <div className={cliente}>
      <Cliente changeFormData={changeFormData}
    formDataCliente={formData} />
    </div>
    </React.Fragment>
  )
}
export default Home
