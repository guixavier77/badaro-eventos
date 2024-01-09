import React from 'react'
import { Button, Input } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const SearchBar = () => {
  return (
    <div className="flex w-1/2 items-center justify-between rounded-2xl bg-primary py-4 pl-8">
      <Input
        type="text"
        disableUnderline
        placeholder="Encontre um evento..."
        className="w-[90%] text-white"
      />
      <Button>
        <SearchIcon className="text-3xl text-white" />
      </Button>
    </div>
  )
}

export default SearchBar
