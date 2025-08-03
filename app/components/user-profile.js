/**
 * User Profile Component
 * 
 * Displays user authentication status and provides logout functionality.
 */

'use client'

import React from 'react'
import { User, LogOut } from '@geist-ui/icons'
import { useAuth } from '../../hooks/use-auth'

export default function UserProfile() {
    const { user, isAuthenticated, logout } = useAuth()

    if (!isAuthenticated || !user) {
        return null
    }

    return (
        <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User size={16} className="text-blue-600" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                    {user.email}
                </p>
                <p className="text-xs text-gray-500">
                    Signed in
                </p>
            </div>
            <button
                onClick={logout}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                title="Sign out"
            >
                <LogOut size={16} className="text-gray-500" />
            </button>
        </div>
    )
} 