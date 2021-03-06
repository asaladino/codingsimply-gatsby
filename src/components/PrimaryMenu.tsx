import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import MenuModel from '../models/MenuModel'

interface Props {
  menus: MenuModel
  onToggleMenu?: () => void
  vertical: boolean
}

const PrimaryMenu = (props: Props) => {
  const { menus, onToggleMenu, vertical } = props
  return (
    <nav>
      <ul className={`menu ${vertical ? 'vertical' : ''}`}>
        {menus.getItems().map(item => {
          return (
            <li key={item.getId()} className={item.isActive()}>
              {item.isInternalLink() ? (
                <Link to={item.getUrl()} onClick={onToggleMenu}>
                  <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                  {item.getTitle()}
                </Link>
              ) : (
                <a href={item.getUrl()} rel="noopener noreferrer" target="_blank">
                  <FontAwesomeIcon icon={[item.getIconPrefix(), item.getIcon()]} />
                  {item.getTitle()}
                </a>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default PrimaryMenu
