import React from 'react'
import {Container,Row,Button} from 'reactstrap'
import {NavLink,Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './header.css';

const nav__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tour',
    display:'Tours'
  },
]


const Header = () => {
  return (
    <header className=''>
      <Container>
      <Row>
      <div className="nav__wrapper d-flex align-items-center justify-content-between">
        {/* //logo start zhala ithun */}
        <div className="logo" style={{ width: '50px' }}>
        <img src={logo} alt="logo" style={{ width: '300px', height: '70px' }} />
        </div>
        {/* logo end kela ata menu start karnar */}
        <div className="navigation">
          <ul className='menu d-flex align-items-center gap-5'>
            {
              nav__links.map((item,index)=>(
                <li className="nav__item" key={index}>
                 <NavLink to={item.path} className={({ isActive }) => (isActive ? 'active__link' : '')}>
                    {item.display}
                  </NavLink>
                </li>


              ))
            }
          </ul>
        </div>
        {/* menobar samplaa */}

        <div className="nav__right d-flex align-items-center gap-4">
          <div className="nav__btns d-flex align-items-center gap-4">
            <Button className="btn secondary__btn" style={{ backgroundColor: 'transparent',border:'none'}}><Link to='/login'>
            Login</Link></Button>
            <Button className="btn primary__btn" style={{ backgroundColor: '#faa935',borderRadius: '50px' }}><Link to='/register'>
            Register</Link></Button>


            <div className="mobile__menu">
            <i className="ri-menu-line"></i>
            </div>
          </div>
        </div>
      </div> 
      </Row>

      </Container>

    </header>
  )
}

export default Header