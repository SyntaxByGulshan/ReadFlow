import React, { Children } from 'react';
import { Link } from 'react-router-dom';
import { BookIcon, BookOpenIcon, DownloadIcon, TagIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookCard } from '../components/BookCard';
export function Home() {
  // Mock data for featured books
  const featuredBooks = [{
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.7
  }, {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.8
  }, {
    id: '3',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Non-Fiction',
    rating: 4.5
  }, {
    id: '4',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Self-Help',
    rating: 4.9
  }];
  // Mock data for popular categories
  const categories = [{
    name: 'Fiction',
    icon: <BookIcon className="h-8 w-8 text-indigo-600" />,
    count: 1245,
    slug: 'fiction'
  }, {
    name: 'Non-Fiction',
    icon: <BookOpenIcon className="h-8 w-8 text-emerald-600" />,
    count: 873,
    slug: 'non-fiction'
  }, {
    name: 'Academic',
    icon: <TagIcon className="h-8 w-8 text-amber-600" />,
    count: 642,
    slug: 'academic'
  }, {
    name: 'Science Fiction',
    icon: <BookIcon className="h-8 w-8 text-fuchsia-600" />,
    count: 421,
    slug: 'sci-fi'
  }];
  // Mock data for recently added books
  const recentBooks = [{
    id: '5',
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    coverImage: 'https://images.unsplash.com/photo-1554495439-b6bb8139a292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Finance',
    rating: 4.6
  }, {
    id: '6',
    title: 'Dune',
    author: 'Frank Herbert',
    coverImage: 'https://images.unsplash.com/photo-1587876931567-564ce588bfbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Science Fiction',
    rating: 4.7
  }, {
    id: '7',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    coverImage: 'https://images.unsplash.com/photo-1603162525937-96dbdab9b3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.5
  }, {
    id: '8',
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Psychology',
    rating: 4.6
  }];
  const container = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const item = {
    hidden: {
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0
    }
  };
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="w-full">
      {/* Hero Section - Redesigned without search bar */}
      <section className="bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }} className="max-w-3xl mx-auto text-center">
            <motion.h1 initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Digital Library at Your Fingertips
            </motion.h1>
            <motion.p initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            duration: 0.5,
            delay: 0.4
          }} className="text-lg md:text-xl mb-10 text-indigo-100 max-w-2xl mx-auto">
              Access thousands of free eBooks and PDFs. Read online or download
              to enjoy anywhere, anytime on any device.
            </motion.p>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.6,
            duration: 0.5
          }} className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/categories" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-full font-medium transition shadow-lg block">
                  Explore Books
                </Link>
              </motion.div>
              <motion.div whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                <Link to="/categories/fiction" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-medium transition block">
                  Browse Fiction
                </Link>
              </motion.div>
            </motion.div>
            <motion.div variants={container} initial="hidden" animate="show" className="mt-8 flex flex-wrap justify-center gap-4">
              <motion.div variants={item} whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.3)'
            }} className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <BookOpenIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">10,000+ Books</span>
              </motion.div>
              <motion.div variants={item} whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.3)'
            }} className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <DownloadIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Free Downloads</span>
              </motion.div>
              <motion.div variants={item} whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(255,255,255,0.3)'
            }} className="flex items-center bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm">
                <TagIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">Multiple Categories</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        {/* Decorative wave shape at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full h-full" style={{
          transform: 'rotate(180deg)'
        }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff" fillOpacity="0.15"></path>
          </svg>
        </div>
      </section>

      {/* Featured Books Section - Enhanced design */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
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
        }} className="flex justify-between items-center mb-10">
            <div>
              <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
                Curated Selection
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Featured Books
              </h2>
            </div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/featured" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredBooks.map((book, index) => <motion.div key={book.id} variants={item} custom={index}>
                <BookCard {...book} />
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Categories Section - Enhanced design */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
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
        }} className="text-center mb-12">
            <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
              Discover
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find your next favorite read by exploring our carefully curated
              categories
            </p>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => <motion.div key={category.slug} variants={item} custom={index}>
                <Link to={`/categories/${category.slug}`} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition block border border-gray-100 h-full">
                  <motion.div whileHover={{
                scale: 1.1,
                rotate: [0, -10, 10, -10, 0],
                transition: {
                  duration: 0.5
                }
              }} className="mb-4 bg-indigo-50 p-4 rounded-full">
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{category.count} books</p>
                  <motion.span className="text-indigo-600 font-medium text-sm flex items-center mt-auto" whileHover={{
                x: 5
              }} transition={{
                duration: 0.2
              }}>
                    Explore Category
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.span>
                </Link>
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Recently Added Section - Enhanced design */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
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
        }} className="flex justify-between items-center mb-10">
            <div>
              <span className="text-indigo-600 font-medium text-sm uppercase tracking-wider">
                Fresh Content
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                Recently Added
              </h2>
            </div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/recent" className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{
          once: true
        }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recentBooks.map((book, index) => <motion.div key={book.id} variants={item} custom={index}>
                <BookCard {...book} />
              </motion.div>)}
          </motion.div>
        </div>
      </section>

      {/* Call to Action - Enhanced design */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="20" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} viewport={{
          once: true
        }} className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Reading?
          </motion.h2>
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} viewport={{
          once: true
        }} className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Join thousands of readers who enjoy our collection of free ebooks.
            No subscription needed, just download and enjoy.
          </motion.p>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }} viewport={{
          once: true
        }} className="flex flex-col sm:flex-row justify-center gap-6">
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/categories" className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full font-medium transition shadow-lg block">
                Browse Categories
              </Link>
            </motion.div>
            <motion.div whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }}>
              <Link to="/popular" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition block">
                Popular Books
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>;
}