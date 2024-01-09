'use client'
import {
  Box,
  Button,
  FormGroup,
  FormLabel,
  Input,
  Switch,
  Typography,
} from '@mui/material'

import { Form, useFormik } from 'formik'

import React, { useState } from 'react'

const Login = () => {
  const [register, setregister] = useState(false)
  const LoginForm = () => {
    return (
      <form
        className="flex w-1/3 flex-col justify-between rounded-2xl bg-white px-10 py-10 shadow"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <p className="text-center text-lg">Acesse sua conta</p>
          <FormGroup>
            <FormLabel className="pb-2  font-bold">E-mail</FormLabel>
            <Input
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disableUnderline
              className="rounded-md px-2 py-1 shadow-md "
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="pb-2  font-bold">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              disableUnderline
              className="rounded-md px-2 py-1 shadow-md "
            />
          </FormGroup>
        </div>

        <Button
          type="submit"
          className="mt-10 rounded-md border px-4 font-bold text-primary"
          sx={{
            border: '1px solid #006D3E',
            '&:hover': {
              bgcolor: '#006D3E',
              color: '#FFFFFF',
            },
          }}
        >
          Acessar sua conta
        </Button>
        <Button
          className="mt-2 rounded-md  bg-primary px-4 font-bold text-white"
          sx={{
            border: '1px solid #006D3E',
            '&:hover': {
              bgcolor: 'white',
              border: '1px solid #006D3E',
              color: '#006D3E',
            },
          }}
          onClick={() => setregister(true)}
        >
          Crie sua conta
        </Button>
      </form>
    )
  }

  const RegisterForm = () => {
    return (
      <form
        className="flex w-1/3 flex-col justify-between rounded-2xl bg-white px-10 py-10 shadow"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col gap-6">
          <p className="text-center text-lg">Faça seu registro</p>
          <FormGroup>
            <FormLabel className="pb-2  font-bold">E-mail</FormLabel>
            <Input
              id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              disableUnderline
              className="rounded-md px-2 py-1 shadow-md "
            />
          </FormGroup>
          <FormGroup>
            <FormLabel className="pb-2  font-bold">Senha</FormLabel>
            <Input
              id="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              disableUnderline
              className="rounded-md px-2 py-1 shadow-md "
            />
          </FormGroup>

          <FormGroup>
            <FormLabel className="pb-2  font-bold">
              Confirme sua senha
            </FormLabel>
            <Input
              id="password"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              disableUnderline
              className="rounded-md px-2 py-1 shadow-md "
            />
          </FormGroup>
        </div>

        <Button
          type="submit"
          className="mt-10 rounded-md border px-4 font-bold text-primary"
          sx={{
            border: '1px solid #006D3E',
            '&:hover': {
              bgcolor: '#006D3E',
              color: '#FFFFFF',
            },
          }}
        >
          Criar conta
        </Button>
        <Button
          className="mt-2 rounded-md  bg-primary px-4 font-bold text-white"
          sx={{
            border: '1px solid #006D3E',
            '&:hover': {
              bgcolor: 'white',
              border: '1px solid #006D3E',
              color: '#006D3E',
            },
          }}
          onClick={() => setregister(false)}
        >
          Faça seu login
        </Button>
      </form>
    )
  }
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async (values) => {
      console.log(values)
      formik.resetForm()
    },
  })
  return (
    <div className="flex h-screen items-center justify-center bg-[#f1f1f1dd]">
      {!register && <LoginForm />}
      {register && <RegisterForm />}
    </div>
  )
}

export default Login
