import React from 'react'
import { useNavigate } from 'react-router-dom'

// ANT-D :
import { Button } from 'antd'

// Services :
import AuthService from 'src/services/auth.services'

// Redux :
import { useSelector } from 'react-redux'

// CSS :
import './Header.scss'



const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.register);

  const logout = () => {
    AuthService.logout(navigate);
  }
  return (
    <div className='dashboard-header'>
      <div className="header-heading">Supplier Portal</div>
      <div className="auth-button">
        {user && <Button type='primary' onClick={logout}>Sign out</Button>}
      </div>
    </div>
  )
}

export default Header
