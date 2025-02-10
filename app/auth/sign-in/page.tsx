'use client'

import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Link from 'next/link'

const SignInPage = () => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center">
            <h1 className="text-4xl font-bold">Sign In</h1>
            <Button
                onClick={() => signIn('google')}
                className="mt-4 mb-8 cursor-pointer gap-8 rounded-sm bg-(--color-strong-purple) p-6 text-lg text-white hover:bg-(--color-dark-accent)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                    fill="white"
                >
                    <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
                Sign in with Google
            </Button>
            <Link href="/" className="main-button">
                Go Back to the Home Page
            </Link>
        </section>
    )
}

export default SignInPage
