import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-8">
        
        {/* Logo & Description */}
        <div className="ml-0 sm:ml-[-40px]">
          <h1 className="text-3xl font-bold text-white mb-4">Signalist</h1>
          <p className="text-gray-400 leading-relaxed">
            Track the market, analyze stocks, and stay ahead with Signalist. Make smarter decisions with real-time insights.
          </p>
          <div className="flex mt-5 space-x-3 flex-wrap">
            <a href="#" className="p-2 bg-gray-800 rounded-full transition-colors text-white">
              <Image
                src="data:image/png;base64,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"
                alt="Meta"
                width={24}
                height={24}
                className="invert"
              />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full transition-colors text-white">
              <Image
                src="data:image/png;base64,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"
                alt="Discord"
                width={24}
                height={24}
                className="invert"
              />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full  transition-colors text-white">
              <Image 
                src="data:image/png;base64,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"
                alt="LinkedIn"
                width={24}
                height={24}
                className="invert"
              />
            </a>
            <a href="#" className="p-2 bg-gray-800 rounded-full transition-colors text-white">
              <Image 
                src="data:image/png;base64,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"
                alt="Github"
                width={24}
                height={24}
                className="invert"
              />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-semibold text-xl text-white mb-4">Quick Links</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Dashboard</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Search</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Portfolio</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Settings</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h1 className="font-semibold text-xl text-white mb-4">Resources</h1>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Blog</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Help Center</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Pricing</a></li>
            <li><a href="#" className="hover:text-white cursor-pointer hover:underline transition-all">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h1 className="font-semibold text-xl text-white mb-4">Subscribe</h1>
          <p className="text-gray-400 mb-4">Get market updates and news directly in your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 transition-colors cursor-pointer text-white px-4 py-3 rounded-lg font-semibold"
            >
              Subscribe
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-2">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-6 border-t-2 border-gray-600 pt-6 mx-0 sm:mx-8 px-2 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-2">
        <p>© 2025 Signalist. All rights reserved.</p>
        <div className="flex flex-wrap justify-center space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-white cursor-pointer transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white cursor-pointer transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white cursor-pointer transition-colors">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}