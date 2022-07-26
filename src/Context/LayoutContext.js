import {createContext, useState} from 'react'

export const LayoutContext = createContext({
  snackbar: {
    open: false,
    autoHideDuration: 6000,
    onClose: () => {},
    message: '',
    action: '',
  },
  setSnackBar: () => {},
  menuOpen: false,
  setMenuOpen: () => {},
})

export default function LayoutContextProvider({children}) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <LayoutContext.Provider value={{menuOpen, setMenuOpen}}>
      {children}
    </LayoutContext.Provider>
  )
}
