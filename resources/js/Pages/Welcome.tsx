import { Head, Link } from '@inertiajs/react'
import { PageProps } from '@/types'
import FloatingChat from '@/Components/ui/FloatingChat'

export default function Welcome({ auth }: PageProps) {
    return (
        <>
            <Head title="Intera" />

            <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex flex-col">

                {/* Header */}
                <header className="flex items-center justify-between px-6 py-4 border-b dark:border-zinc-700">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Intera
                    </h1>

                    <nav className="flex gap-3">
                        {auth.user ? (
                            <Link
                                href={route('dashboard')}
                                className="px-4 py-2 rounded-md text-sm bg-primary text-white"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link href={route('login')} className="px-4 py-2 text-sm">
                                    Login
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="px-4 py-2 bg-primary text-white rounded-md"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>

                {/* Content */}
                <main className="flex-1 flex items-center justify-center text-gray-600">
                    <p>Selamat datang di Intera 🌏</p>
                </main>

                <footer className="text-center py-4 text-sm text-gray-500">
                    © {new Date().getFullYear()} Intera
                </footer>

                {/* Floating Chat */}
                <FloatingChat isAuthenticated={!!auth.user} />
            </div>
        </>
    )
}
