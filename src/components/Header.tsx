import React, { useState, Children, Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, MenuIcon, XIcon, BookOpenIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const navigate = useNavigate();
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div whileHover={{
            rotate: [0, -10, 10, -10, 0]
          }} transition={{
            duration: 0.5
          }}>
              <BookOpenIcon className="h-8 w-8 text-indigo-600" />
            </motion.div>
            <motion.span initial={{
            opacity: 0,
            x: -10
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.5
          }} className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              ReadFlow
            </motion.span>
          </Link>
          {/* Enhanced Search Bar - Centered and Prominent */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5
        }} className="hidden md:block flex-grow max-w-2xl mx-4">
            <form onSubmit={handleSearch} className="relative">
              <motion.div animate={{
              boxShadow: isSearchFocused ? '0 4px 20px rgba(79, 70, 229, 0.15)' : '0 2px 10px rgba(0, 0, 0, 0.05)',
              scale: isSearchFocused ? 1.02 : 1
            }} transition={{
              duration: 0.2
            }} className="relative">
                <input type="text" placeholder="Search for books, authors, or topics..." className="w-full py-3 pl-12 pr-10 rounded-full border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onFocus={() => setIsSearchFocused(true)} onBlur={() => setIsSearchFocused(false)} />
                <motion.div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500" animate={{
                scale: isSearchFocused ? 1.1 : 1
              }}>
                  <SearchIcon size={20} />
                </motion.div>
                <motion.button whileHover={{
                scale: 1.1
              }} whileTap={{
                scale: 0.9
              }} type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full text-white hover:from-indigo-700 hover:to-purple-700 transition shadow-md">
                  <SearchIcon size={16} />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.div whileHover={{
            y: -2
          }} whileTap={{
            y: 0
          }}>
              <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium">
                Home
              </Link>
            </motion.div>
            <motion.div whileHover={{
            y: -2
          }} whileTap={{
            y: 0
          }}>
              <Link to="/categories/fiction" className="text-gray-700 hover:text-indigo-600 font-medium">
                Fiction
              </Link>
            </motion.div>
            <motion.div whileHover={{
            y: -2
          }} whileTap={{
            y: 0
          }}>
              <Link to="/categories/non-fiction" className="text-gray-700 hover:text-indigo-600 font-medium">
                Non-Fiction
              </Link>
            </motion.div>
            <motion.div whileHover={{
            y: -2
          }} whileTap={{
            y: 0
          }}>
              <Link to="/categories/academic" className="text-gray-700 hover:text-indigo-600 font-medium">
                Academic
              </Link>
            </motion.div>
          </nav>
          {/* Mobile Menu Button */}
          <motion.button whileTap={{
          scale: 0.9
        }} className="md:hidden text-gray-700 hover:text-indigo-600" onClick={toggleMenu}>
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </motion.button>
        </div>
        {/* Mobile Search and Navigation */}
        <AnimatePresence>
          {isMenuOpen && <motion.div initial={{
          opacity: 0,
          height: 0
        }} animate={{
          opacity: 1,
          height: 'auto'
        }} exit={{
          opacity: 0,
          height: 0
        }} transition={{
          duration: 0.3
        }} className="md:hidden mt-4 pb-4 overflow-hidden">
              <form onSubmit={handleSearch} className="relative mb-4">
                <div className="relative">
                  <input type="text" placeholder="Search for books, authors, or topics..." className="w-full py-3 pl-12 pr-10 rounded-full border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white shadow-md" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500">
                    <SearchIcon size={20} />
                  </div>
                  <motion.button whileTap={{
                scale: 0.9
              }} type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-full text-white">
                    <SearchIcon size={16} />
                  </motion.button>
                </div>
              </form>
              <motion.nav variants={{
            hidden: {
              opacity: 0
            },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }} initial="hidden" animate="show" className="flex flex-col space-y-3">
                <motion.div variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              show: {
                opacity: 1,
                x: 0
              }
            }}>
                  <Link to="/" className="text-gray-700 hover:text-indigo-600 py-2 block font-medium">
                    Home
                  </Link>
                </motion.div>
                <motion.div variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              show: {
                opacity: 1,
                x: 0
              }
            }}>
                  <Link to="/categories/fiction" className="text-gray-700 hover:text-indigo-600 py-2 block font-medium">
                    Fiction
                  </Link>
                </motion.div>
                <motion.div variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              show: {
                opacity: 1,
                x: 0
              }
            }}>
                  <Link to="/categories/non-fiction" className="text-gray-700 hover:text-indigo-600 py-2 block font-medium">
                    Non-Fiction
                  </Link>
                </motion.div>
                <motion.div variants={{
              hidden: {
                opacity: 0,
                x: -20
              },
              show: {
                opacity: 1,
                x: 0
              }
            }}>
                  <Link to="/categories/academic" className="text-gray-700 hover:text-indigo-600 py-2 block font-medium">
                    Academic
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>}
        </AnimatePresence>
      </div>
    </header>;
}