import React from 'react'
import Logo from '../logo'
import { Button } from '@mui/material'

const Header = () => {
  return (
    <header className="shadow-md">
      <main className="center flex h-20 items-center justify-between px-7">
        <Logo />
        <Button
          className="bg-primary px-6 font-bold text-white"
          sx={{
            '&:hover': {
              bgcolor: 'white',
              border: '1px solid #006D3E',
              color: '#006D3E',
            },
          }}
        >
          Login
        </Button>
      </main>
    </header>
  )
}

export default Header
