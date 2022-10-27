import { useState } from "react"

const Dropdown = ({ options, dispatch }) => {
    const [open, setOpen] = useState(false)
    
    const handleOpen = () => {
      setOpen(prev => !prev)
    }
    
    
    const handleSelection = (e) => {
      const value = e.target.value
      dispatch({type: options.type, value})
      setOpen(prev => !prev)
    }
  
    return <div className="cycle-dropdown">
      <button onClick={handleOpen}>{options.name}</button>
      {open ? (
        <ul className="menu">
          {options.values.map(value =>{
              return  <li className="menu-item">
                        <button className="menu-button" value={value} onClick={handleSelection}>{value}</button>
                      </li>
              })
          }
        </ul>) : null}
    </div>
  }

  export default Dropdown