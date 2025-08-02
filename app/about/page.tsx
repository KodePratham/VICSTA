export default function About() {
  return (
    <div className="retro-content">
      {/* Header */}
      <header className="retro-header">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2 md:space-x-4">
              <a href="/" className="text-white text-lg md:text-xl font-bold hover:no-underline">
                VICSTA
              </a>
              <span className="text-white text-xs md:text-sm opacity-80 hidden sm:block">About</span>
            </div>
            <div className="desktop-nav flex items-center space-x-6">
              <a href="/" className="text-white text-sm hover:underline">Home</a>
              <a href="/about" className="text-white text-sm font-bold">About</a>
              <a href="/achievements" className="text-white text-sm hover:underline">Achievements</a>
              <a href="/#domains" className="text-white text-sm hover:underline">Domains</a>
            </div>
            <div className="mobile-nav">
              <button className="text-white text-sm">Menu</button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="retro-card">
          <div className="retro-section-header">
            About VICSTA
          </div>
          <div className="p-4 md:p-8 text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-retro-blue mx-auto retro-profile-pic flex items-center justify-center mb-4 md:mb-6">
              <span className="text-white font-bold text-2xl md:text-3xl">🚀</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold mb-4">About VICSTA</h1>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <div className="text-sm font-bold text-yellow-800 mb-2">🚧 Coming Soon</div>
              <div className="text-xs text-yellow-700">This page is currently under development</div>
            </div>
            
            <p className="text-xs md:text-sm mb-4 text-gray-600 leading-relaxed">
              We're crafting an amazing story about VICSTA, our mission, values, and the incredible team behind our success.
            </p>
            <p className="text-xs text-gray-500 mb-6 md:mb-8">
              Stay tuned for detailed insights into our journey, achievements, and future aspirations.
            </p>
            
            <div className="mobile-button-group">
              <a href="/" className="retro-button">← Back to Home</a>
              <button className="retro-button-secondary">Notify When Ready</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
