import './index.css'

const TabItem = props => {
  const {tabItemList, onTapItam, activeTapItem} = props
  const {displayText, tabId} = tabItemList
  const activeTapbutton = activeTapItem ? 'active-Tab_button' : ''
  const tabButton = () => {
    onTapItam(tabId)
  }
  return (
    <li className="margin">
      <button
        type="button"
        className={`tap-text-button ${activeTapbutton}`}
        onClick={tabButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem