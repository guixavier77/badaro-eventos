'use client'
import React, { useState } from 'react'
import Filter from '@/components/Filter/page'
import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalRegisterEvent from '@/components/ModalRegister/page';
import Event from '@/database/entities/event';
const FilterOptions = [
  {
    text: 'Aprovados',
    type: 0
  },
  {
    text: 'Em espera',
    type: 1
  },
  {
    text: 'Todos',
    type: 2
  }
];

const MyEvents = () => {
  const [filterOption, setFilterOption] = useState(0)
  const [openRegister, setOpenRegister] = useState(false);
  const [dataSelected, setDataSelected] = useState<Event | null>(null);

  const handleFilterChange = (option: number) => {
    setFilterOption(option);
  };

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };
  const handleCloseRegister = () => {
    setOpenRegister(false);
  };


  const handleOpenEdit = (item: Event) => {
    setOpenRegister(true);
    setDataSelected(item);
  };
  return (
    <>
      <main className="flex h-screen justify-center bg-[#f1f1f1dd]">
        <div className="center">
          <div className="mt-[80px] flex flex-row gap-4 items-center justify-beetween  w-full">

            <Filter
              options={FilterOptions}
              onFilterChange={handleFilterChange}
              filterOption={filterOption}
            />

            <Button
              className="flex mt-2 rounded-3xl text-xl bg-primary px-4 font-bold justify-center items-center text-white py-4"
              sx={{
                border: '1px solid #006D3E',
                '&:hover': {

                  border: '1px solid #006D3E',
                  color: '#006D3E',

                },
              }}
              onClick={handleOpenRegister}
            >
              <AddIcon />
              Criar evento
            </Button>



          </div>
        </div>
      </main>

      <ModalRegisterEvent
        open={openRegister}
        setIsOpen={handleOpenRegister}
        setIsClose={handleCloseRegister}
        editData={dataSelected}


      />
    </>
  )
}

export default MyEvents