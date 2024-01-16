import React from 'react'

const mock = [
  {
    name: 'Badaro Fest',
    date: '21/07/2024',
    address: {
      city: 'Francisco Badaró',
      street: 'Av. João Pinheiro',
      number: '86',
      neighborhood: 'Bairro de Fátima',
    },
  },
  {
    name: 'Summer Gala',
    date: '15/08/2024',
    address: {
      city: 'Rio de Janeiro',
      street: 'Copacabana Beach',
      number: '123',
      neighborhood: 'Copacabana',
    },
  },
  {
    name: 'Winter Extravaganza',
    date: '02/12/2024',
    address: {
      city: 'Snowyville',
      street: 'Frosty Lane',
      number: '42',
      neighborhood: 'Icy Heights',
    },
  },
  {
    name: 'Spring Fling',
    date: '20/04/2024',
    address: {
      city: 'Blossomtown',
      street: 'Floral Avenue',
      number: '7',
      neighborhood: 'Petal Gardens',
    },
  },
]

const CardEvent = () => {
  return (
    <div className='flex w-full justify-between mt-20 rounded-xl'>
      {mock.map((event) => (
        <div className='shadow'>
          <div className='p-4'>
            <p className='text-center uppercase font-bold text-xl'>{event.name}</p>
            <p>{event.date}</p>
            <p>{event.address.city}</p>

          </div>
        </div>
      ))}
    </div>
  )
}

export default CardEvent
