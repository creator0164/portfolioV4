const ButtonSide = () => {
    const get = (selector) => document.querySelector(selector)
    const toggle_sidenav = () => {
        get('.sidenav').classList.toggle('active')
        get('.sidenav-activate').classList.toggle('active')
        get('.indicator').classList.toggle('hide')
    }
  return (
    <button className="sidenav-activate" onClick={toggle_sidenav}>
        <span className="indicator hide"><i className="material-icons">close</i></span>
        <span className="indicator"><i className="material-icons">menu</i></span>
    </button>
  )
}

export default ButtonSide
