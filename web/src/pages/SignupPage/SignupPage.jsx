import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    try {
      const response = await signUp(data)
      if (response.error) {
        toast.error(response.error)
      } else {
        toast.success('Welcome! Account created successfully.')
        navigate(routes.home())
      }
    } catch (error) {
      toast.error('An unexpected error occurred.')
      console.error('Signup error:', error)
    }
  }

  return (
    <>
      <Metadata title="Signup" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <main className="flex min-h-screen items-center justify-center bg-pink-300">
        <div className="container mx-auto max-w-4xl bg-white p-6 shadow-lg">
          <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
            <h2 className="font-playful text-3xl uppercase tracking-widest text-white">
              Sign Up
            </h2>
          </header>
          <div className="mt-8">
            <Form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div className="md:w-1/2">
                  <Label
                    name="username"
                    className="text-xl font-bold text-blue-900"
                  >
                    Email
                  </Label>
                  <TextField
                    name="username"
                    className="rw-input form-input w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    ref={emailRef}
                    validation={{ required: true }}
                  />
                  <FieldError name="email" className="rw-field-error" />
                </div>
                <div className="md:w-1/2">
                  <Label
                    name="name"
                    className="text-xl font-bold text-blue-900"
                  >
                    Name
                  </Label>
                  <TextField
                    name="name"
                    className="rw-input form-input w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    validation={{ required: true }}
                  />
                  <FieldError name="name" className="rw-field-error" />
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div className="md:w-1/2">
                  <Label
                    name="address"
                    className="text-xl font-bold text-blue-900"
                  >
                    Address
                  </Label>
                  <TextField
                    name="address"
                    className="rw-input form-input w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  />{' '}
                  <FieldError name="address" className="rw-field-error" />
                </div>
                <div className="md:w-1/2">
                  <Label
                    name="password"
                    className="text-xl font-bold text-blue-900"
                  >
                    Password
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input form-input w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    autoComplete="current-password"
                    validation={{ required: true, minLength: 8 }}
                  />
                  <FieldError name="password" className="rw-field-error" />
                </div>
              </div>
              <Submit className="mt-4 rounded bg-yellow-400 px-6 py-2 font-bold text-blue-900">
                Sign Up
              </Submit>
            </Form>
          </div>
          <div className="mt-4 text-center">
            <span>Already have an account? </span>
            <Link to={routes.login()} className="text-blue-900 underline">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default SignupPage
