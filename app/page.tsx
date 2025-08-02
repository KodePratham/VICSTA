export default function Home() {
  return (
    <div className="retro-content">
      {/* Header */}
      <header className="retro-header">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-white text-xl font-bold">
                VICSTA
              </h1>
              <span className="text-white text-sm opacity-80">Vishwakarma IOT Cybersecurity Tech Association</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="/about" className="text-white text-sm hover:underline">About</a>
              <a href="/achievements" className="text-white text-sm hover:underline">Achievements</a>
              <a href="#domains" className="text-white text-sm hover:underline">Domains</a>
              <a href="#contact" className="text-white text-sm hover:underline">Contact</a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        
   

        <div className="grid grid-cols-12 gap-6">
          
          {/* Main Content Area */}
          <div className="col-span-8">
            {/* Welcome Card */}
            <div className="retro-card">
              <div className="retro-section-header">
                Welcome to VICSTA Community
              </div>
              <div className="p-6 text-center">
        
                <h2 className="text-lg font-bold mb-3">Connect. Learn. Innovate.</h2>
                <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
                  Join our community of tech enthusiasts advancing in IoT, Cybersecurity, and Blockchain technologies. 
                  Connect with like-minded individuals and work on cutting-edge projects.
                </p>
                <div className="flex justify-center space-x-3">
                  <button className="retro-button">Join Community</button>
                  <a href="/about" className="retro-button-secondary">Learn More</a>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="retro-card">
              <div className="retro-section-header">
                Stay Updated
              </div>
              <div className="p-4">
                <p className="text-sm mb-4">Subscribe to receive updates about events, workshops, and tech insights:</p>
                <div className="flex space-x-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="retro-input flex-1"
                  />
                  <button className="retro-button">Subscribe</button>
                </div>
              </div>
            </div>

            {/* Recent Updates */}
            <div className="retro-card">
              <div className="retro-section-header">
                Recent Highlights
              </div>
              <div className="p-4 space-y-4">
                
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-retro-blue retro-profile-pic flex items-center justify-center">
                      <span className="text-white text-sm font-bold">🏆</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">APOGEE BITS Pilani, Pilani Campus</h4>
                      <p className="text-xs text-gray-600 mb-2">Team Meraki Titans secured the Top 5 Position in the “Prototype Presentation Competition,
                         BITS Pilani” where they showcased their AI + IoT Powered Healthcare System for Remote Villages</p>
                    </div>
                  </div>
                </div>

                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-retro-blue retro-profile-pic flex items-center justify-center">
                      <span className="text-white text-sm font-bold">📚</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-sm mb-1">International Research Internship - France</h4>
                      <p className="text-xs text-gray-600 mb-2">Anish Nitin Takwale completed University Project Based Internship at Avignon University, France.
                         Research on "Analysis and Mitigation Of Black Hole Attack Using Honeypot in IoT Mechanism". 
                         Received Best Performance Certificate with 'A' Grade in oral defense. </p>
                    </div>
                  </div>
                </div>

            

              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            
            {/* Profile Info */}
            <div className="retro-sidebar">
              <div className="retro-section-header">
                About VICSTA
              </div>
              <div className="p-4">
                <div className="text-center mb-3">
                
                  <div className="mt-2 text-sm font-bold">VICSTA</div>
                  <div className="text-xs text-gray-600">Tech Association</div>
                </div>
                <div className="text-xs space-y-1">
                  <div><strong>Founded:</strong> 2023</div>
                  <div><strong>Location:</strong> Vishwakarma Institute</div>
                  <div><strong>Focus:</strong> IoT, Cybersecurity, Blockchain</div>
                </div>
              </div>
            </div>

            {/* Focus Areas */}
            <div className="retro-sidebar" id="domains">
              <div className="retro-section-header">
                Our Focus Areas
              </div>
              <div className="p-4 space-y-3 text-xs">
                <div className="border-b border-gray-200 pb-2">
                  <div className="font-bold mb-1 flex items-center">
                    <span className="mr-2">🌐</span>Internet of Things
                  </div>
                  <div className="text-gray-600">Building smart, connected systems</div>
                  <div className="text-retro-blue font-bold mt-1">50+ active projects</div>
                </div>
                <div className="border-b border-gray-200 pb-2">
                  <div className="font-bold mb-1 flex items-center">
                    <span className="mr-2">🔒</span>Cybersecurity
                  </div>
                  <div className="text-gray-600">Advanced security protocols</div>
                  <div className="text-retro-blue font-bold mt-1">35+ security audits</div>
                </div>
                <div>
                  <div className="font-bold mb-1 flex items-center">
                    <span className="mr-2">⛓️</span>Blockchain
                  </div>
                  <div className="text-gray-600">Decentralized technologies</div>
                  <div className="text-retro-blue font-bold mt-1">20+ DApps built</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="retro-sidebar">
              <div className="retro-section-header">
                Quick Links
              </div>
              <div className="p-4 space-y-2 text-xs">
                <div><a href="#" className="retro-link">→ View Projects</a></div>
                <div><a href="#" className="retro-link">→ Upcoming Events</a></div>
                <div><a href="#" className="retro-link">→ Member Directory</a></div>
                <div><a href="#" className="retro-link">→ Resources</a></div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to Action */}
        <div className="retro-card mt-6">
          <div className="p-8 text-center">
            <h2 className="text-xl font-bold mb-4">Ready to <span style={{color: 'var(--retro-blue)'}}>Join Us?</span></h2>
            <p className="text-sm text-gray-600 mb-6">
              Become part of our innovative community and advance your skills in cutting-edge technologies.
            </p>
            <button className="retro-button text-base px-8 py-3">
              Join VICSTA Today
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-white border-t border-gray-300 py-8 px-4 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-4 gap-8 text-xs">
            <div>
              <h4 className="font-bold mb-3 text-retro-blue">VICSTA</h4>
              <p className="text-gray-600">Connecting minds, building futures in technology</p>
            </div>
            <div>
              <h5 className="font-bold mb-3">Quick Links</h5>
              <div className="space-y-1 text-gray-600">
                <div><a href="/about" className="retro-link">About Us</a></div>
                <div><a href="/achievements" className="retro-link">Achievements</a></div>
                <div><a href="#" className="retro-link">Events</a></div>
                <div><a href="#" className="retro-link">Projects</a></div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-3">Community</h5>
              <div className="space-y-1 text-gray-600">
                <div>500+ Members</div>
                <div>Weekly Meetups</div>
                <div>Open Source Projects</div>
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-3">Connect</h5>
              <div className="space-y-1 text-gray-600">
                <div>contact@vicsta.edu</div>
                <div className="text-retro-blue">Follow us on social media</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
            <p>© 2005 VICSTA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
