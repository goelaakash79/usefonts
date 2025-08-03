/**
 * Authentication Drawer Component
 * 
 * Drawer that opens when users try to favorite fonts without authentication.
 * Handles email input and OTP verification flow.
 */

'use client'

import React, { useState } from 'react'
import { X, Mail, Lock, ArrowLeft } from '@geist-ui/icons'
import { useAuth } from '../../hooks/use-auth'
import { Drawer } from 'vaul'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import * as Dialog from '@radix-ui/react-dialog'

const AuthDrawer = ({ isOpen, onClose, onSuccess }) => {
    const [step, setStep] = useState('email') // 'email' or 'otp'
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState('')

    const { sendOTP, verifyOTP } = useAuth()

    const handleEmailSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            await sendOTP(email)
            setStep('otp')
            setSuccessMessage('OTP sent to your email!')
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const handleOTPSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        try {
            await verifyOTP(otp)
            setSuccessMessage('Authentication successful!')
            setTimeout(() => {
                onSuccess?.()
                onClose()
                resetForm()
            }, 1000)
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const resetForm = () => {
        setStep('email')
        setEmail('')
        setOtp('')
        setError('')
        setSuccessMessage('')
    }

    const handleClose = () => {
        resetForm()
        onClose()
    }

    const handleBackToEmail = () => {
        setStep('email')
        setError('')
        setSuccessMessage('')
    }

    if (!isOpen) return null

    return (
        <Drawer.Root open={isOpen} onOpenChange={handleClose} direction="right">
            <Drawer.Portal>
                <Drawer.Overlay className="fixed inset-0 bg-black/40" />
                <Drawer.Content
                    className="right-2 top-2 bottom-2 fixed z-50 outline-none w-[400px] flex"
                    style={{ '--initial-transform': 'calc(100% + 8px)' }}
                >
                    <Dialog.Title className="sr-only">
                        {step === 'email' ? 'Sign in to save favorites' : 'Verify OTP'}
                    </Dialog.Title>
                    <div className="bg-white h-full w-full grow p-6 flex flex-col rounded-[16px] shadow-xl border border-gray-200">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
                                {step === 'email' ? 'Sign in to save favorites' : 'Verify OTP'}
                            </h2>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handleClose}
                                className="h-8 w-8"
                            >
                                <X size={16} />
                            </Button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto">
                            {step === 'email' ? (
                                <form onSubmit={handleEmailSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                            Email address
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                            <Input
                                                type="email"
                                                id="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="pl-10 h-11"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-sm text-red-600">{error}</p>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-11"
                                    >
                                        {isLoading ? 'Sending OTP...' : 'Send OTP'}
                                    </Button>

                                    <p className="text-xs text-gray-500 text-center">
                                        We'll send a 6-digit code to your email for verification
                                    </p>
                                </form>
                            ) : (
                                <form onSubmit={handleOTPSubmit} className="space-y-6">
                                    <div className="text-center space-y-2">
                                        <p className="text-sm text-gray-600">
                                            Enter the 6-digit code sent to
                                        </p>
                                        <p className="font-medium text-gray-900">{email}</p>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="otp" className="text-sm font-medium text-gray-700">
                                            OTP Code
                                        </Label>
                                        <div className="relative">
                                            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                                            <Input
                                                type="text"
                                                id="otp"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                                className="pl-10 h-11 text-center text-lg tracking-widest"
                                                placeholder="000000"
                                                maxLength={6}
                                                required
                                            />
                                        </div>
                                    </div>

                                    {error && (
                                        <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                            <p className="text-sm text-red-600">{error}</p>
                                        </div>
                                    )}

                                    {successMessage && (
                                        <div className="p-3 bg-green-50 border border-green-200 rounded-lg">
                                            <p className="text-sm text-green-600">{successMessage}</p>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full h-11"
                                    >
                                        {isLoading ? 'Verifying...' : 'Verify OTP'}
                                    </Button>

                                    <Button
                                        type="button"
                                        variant="ghost"
                                        onClick={handleBackToEmail}
                                        className="w-full"
                                    >
                                        <ArrowLeft size={16} />
                                        Back to email
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default AuthDrawer 