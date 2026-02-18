const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🤫 Confess
            </span>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Share your secrets anonymously
            </p>
          </div>

          {/* Features */}
          <div className="flex space-x-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <span>🔒</span>
              <span>Anonymous</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>🔑</span>
              <span>Secret Code Protected</span>
            </div>
            <div className="flex items-center space-x-1">
              <span>❤️</span>
              <span>React</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Anonymous Confession Wall
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-gray-700 mt-6 pt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Made with 💜 for keeping secrets safe. Your identity is always protected.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;