import './index.css'

const AppItem = props => {
  const {appItamList} = props
  const {appName, imageUrl} = appItamList

  return (
    <li className="app-itam-list-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
