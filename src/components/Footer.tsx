import { Link } from 'react-router-dom';
import { BookOpenIcon, GithubIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 10
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <footer className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <motion.div whileHover={{
              rotate: 360
            }} transition={{
              duration: 0.5
            }}>
                <BookOpenIcon className="h-6 w-6 text-indigo-400" />
              </motion.div>
              <span className="text-lg font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                BookHaven
              </span>
            </Link>
            <p className="text-gray-300 text-sm">
              Your digital library for free ebooks and PDF downloads. Read,
              learn, and explore from our vast collection.
            </p>
          </motion.div>
          {/* Categories */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-indigo-300">
              Categories
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <motion.li variants={item}>
                <Link to="/categories/fiction" className="hover:text-indigo-400 transition-colors">
                  Fiction
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/categories/non-fiction" className="hover:text-indigo-400 transition-colors">
                  Non-Fiction
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/categories/academic" className="hover:text-indigo-400 transition-colors">
                  Academic
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/categories/sci-fi" className="hover:text-indigo-400 transition-colors">
                  Science Fiction
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/categories/mystery" className="hover:text-indigo-400 transition-colors">
                  Mystery
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          {/* Quick Links */}
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-indigo-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <motion.li variants={item}>
                <Link to="/about" className="hover:text-indigo-400 transition-colors">
                  About Us
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/contact" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/faq" className="hover:text-indigo-400 transition-colors">
                  FAQ
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/privacy" className="hover:text-indigo-400 transition-colors">
                  Privacy Policy
                </Link>
              </motion.li>
              <motion.li variants={item}>
                <Link to="/terms" className="hover:text-indigo-400 transition-colors">
                  Terms of Service
                </Link>
              </motion.li>
            </ul>
          </motion.div>
          {/* Connect */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-indigo-300">
              Connect With Us
            </h3>
            <div className="flex space-x-4 mb-4">
              <motion.a href="#" whileHover={{
              y: -5,
              scale: 1.2
            }} whileTap={{
              scale: 0.9
            }} className="text-gray-300 hover:text-indigo-400">
                <TwitterIcon size={20} />
              </motion.a>
              <motion.a href="#" whileHover={{
              y: -5,
              scale: 1.2
            }} whileTap={{
              scale: 0.9
            }} className="text-gray-300 hover:text-indigo-400">
                <InstagramIcon size={20} />
              </motion.a>
              <motion.a href="#" whileHover={{
              y: -5,
              scale: 1.2
            }} whileTap={{
              scale: 0.9
            }} className="text-gray-300 hover:text-indigo-400">
                <GithubIcon size={20} />
              </motion.a>
            </div>
            <p className="text-gray-300 text-sm">
              Subscribe to our newsletter for updates on new books and features.
            </p>
            <form className="mt-3">
              <input type="email" placeholder="Your email" className="w-full px-3 py-2 text-sm bg-indigo-900/50 border border-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-white" />
              <motion.button whileHover={{
              scale: 1.03
            }} whileTap={{
              scale: 0.97
            }} type="submit" className="w-full mt-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-4 rounded-md text-sm transition duration-300 shadow-md">
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="border-t border-indigo-800/50 mt-8 pt-6 text-center text-sm text-indigo-200">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }}>
            &copy; {new Date().getFullYear()} BookHaven. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>;
}