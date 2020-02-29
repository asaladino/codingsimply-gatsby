import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PrimaryMenu from './PrimaryMenu'
import MenuModel from '../models/MenuModel'

const DefaultHeader = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menus = new MenuModel({
    items: [
      { ID: 142, title: 'Home', url: '/' },
      { ID: 228, title: 'Profile', url: '/page-profile' },
      { ID: 13, title: 'Blog', url: '/blog' },
      { ID: 155, title: 'Portfolio', url: '/projects' },
      { ID: 520, title: 'Books', url: '/books' },
      { ID: 376, title: 'Github', url: 'https://github.com/asaladino' },
      { ID: 524, title: 'Stack Overflow', url: 'https://stackoverflow.com/cv/adam.saladino' }
    ]
  })

  const onToggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  const currentMenuItem = () => {
    return menus
      .getItems()
      .filter(item => item.isCurrentItem())
      .map(item => {
        return (
          <span key={item.getId()} className={`${item.isActive()} text-center`}>
            <a href={item.getUrl()}>
              <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
              {item.getTitle()}
            </a>
          </span>
        )
      })
  }

  return (
    <header className="site-header">
      <div className="top-bar" id="main-menu">
        <div className="top-bar-left">
          <ul className="menu expanded">
            <li className="hide-for-large">
              <button
                type="button"
                id="hamburger"
                data-toggle="offCanvas"
                onClick={onToggleMenu}
                className={`button ${openMenu ? '' : 'hollow'}`}
              >
                <span className="show-for-sr">Menu</span>
                <FontAwesomeIcon icon="bars" />
              </button>
            </li>
            <li>
              <h1>Coding Simply</h1>
            </li>
            <li className="text-right show-for-small-only">{currentMenuItem()}</li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu show-for-medium-only">
            <li>{currentMenuItem()}</li>
          </ul>
          <div className="show-for-large">
            <PrimaryMenu menus={menus} vertical={false} />
          </div>
        </div>
      </div>
      <div className={`mobile-menu hide-for-large animated fast ${openMenu ? 'bounceIn' : 'bounceOut'}`}>
        <PrimaryMenu menus={menus} vertical onToggleMenu={onToggleMenu} />
      </div>
    </header>
  )
}
export default DefaultHeader
