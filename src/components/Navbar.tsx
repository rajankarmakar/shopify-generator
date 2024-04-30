export default function Navbar() {
    return(
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <a href="#" className="text-white text-xl font-bold">Shopify Generator</a>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">Pricing</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">Docs</a>
                    <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm">Blog</a>
                    <button type="button" className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Get Started
                    </button>
                </div>
                </div>
            </div>
        </nav>
    );
}