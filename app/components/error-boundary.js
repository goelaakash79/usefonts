'use client'

import React from 'react'

/**
 * Error Boundary Component
 * 
 * Catches JavaScript errors anywhere in the child component tree
 * and displays a fallback UI instead of crashing the whole app.
 */
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true, error }
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console but don't crash the app
        		// Error caught by boundary

        // Check if it's a content blocker error
        if (error.message && error.message.includes('ERR_BLOCKED_BY_CONTENT_BLOCKER')) {
            		// Content blocker detected
        }
    }

    render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div className="flex items-center justify-center min-h-screen bg-gray-50">
                    <div className="text-center p-8">
                        <div className="text-2xl font-bold text-gray-800 mb-4">
                            Something went wrong
                        </div>
                        <div className="text-gray-600 mb-6">
                            {this.state.error?.message?.includes('ERR_BLOCKED_BY_CONTENT_BLOCKER')
                                ? 'A content blocker may be interfering with this application. Please try disabling your ad blocker or privacy extensions.'
                                : 'An unexpected error occurred. Please refresh the page and try again.'
                            }
                        </div>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                        >
                            Refresh Page
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary 