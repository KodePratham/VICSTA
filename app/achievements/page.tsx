export default function Achievements() {
  return (
    <div className="retro-content">
      {/* Header */}
      <header className="retro-header">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-white text-xl font-bold hover:no-underline">
                VICSTA
              </a>
              <span className="text-white text-sm opacity-80">Achievements</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/" className="text-white text-sm hover:underline">Home</a>
              <a href="/about" className="text-white text-sm hover:underline">About</a>
              <a href="/achievements" className="text-white text-sm font-bold">Achievements</a>
              <a href="/#domains" className="text-white text-sm hover:underline">Domains</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-6">
        <div className="retro-card">
          <div className="retro-section-header">
            VICSTA Achievements
          </div>
          <div className="p-8 text-center">
            <div className="w-24 h-24 bg-retro-blue mx-auto retro-profile-pic flex items-center justify-center mb-6">
              <span className="text-white font-bold text-3xl">🏆</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">Our Achievements</h1>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <div className="text-sm font-bold text-yellow-800 mb-2">🚧 Coming Soon</div>
              <div className="text-xs text-yellow-700">This page is currently under development</div>
            </div>
            
            <p className="text-sm mb-4 text-gray-600 leading-relaxed">
              We're compiling our most significant milestones, awards, and success stories that showcase VICSTA's excellence.
            </p>
            <p className="text-xs text-gray-500 mb-8">
              From hackathon victories to research publications, get ready to explore our journey of achievements.
            </p>
            
            <div className="space-x-4">
              <a href="/" className="retro-button">← Back to Home</a>
              <button className="retro-button-secondary">Notify When Ready</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
