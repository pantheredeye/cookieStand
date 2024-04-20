import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes, useParams } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()
  const { redirectTo } = useParams()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(redirectTo || routes.home())
    }
  }, [isAuthenticated, redirectTo])

  const usernameRef = useRef(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <Metadata title="Login" />
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <main className="flex min-h-screen items-center justify-center bg-pink-300">
        <div className="container mx-auto max-w-4xl bg-white p-6 shadow-lg">
          <header className="rounded-lg bg-blue-900 p-8 text-center text-white shadow-xl">
            <h2 className="font-playful text-3xl uppercase tracking-widest text-white">
              Log In
            </h2>
          </header>
          <div className="mt-8">
            <Form onSubmit={onSubmit} className="flex flex-col space-y-4">
              <div className="flex flex-col justify-between gap-4">
                <Label
                  name="username"
                  className="text-xl font-bold text-blue-900"
                >
                  Username
                </Label>
                <TextField
                  name="username"
                  className="rw-input form-input w-full rounded border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
                  ref={usernameRef}
                  validation={{
                    required: {
                      value: true,
                      message: 'Username is required',
                    },
                  }}
                />
                <FieldError name="username" className="rw-field-error" />
              </div>
              <div className="flex flex-col justify-between gap-4">
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
                  validation={{
                    required: {
                      value: true,
                      message: 'Password is required',
                    },
                  }}
                />
                <FieldError name="password" className="rw-field-error" />
              </div>
              <div className="text-right">
                <Link
                  to={routes.forgotPassword()}
                  className="text-blue-900 underline"
                >
                  Forgot Password?
                </Link>
              </div>
              <Submit className="mt-4 rounded bg-yellow-400 px-6 py-2 font-bold text-blue-900">
                Log In
              </Submit>
            </Form>
          </div>
          <div className="mt-4 text-center">
            <span>Don't have an account? </span>
            <Link to={routes.signup()} className="text-blue-900 underline">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
