import React, { Children } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpenIcon, DownloadIcon, StarIcon, ShareIcon, BookmarkIcon, ChevronLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { BookCard } from '../components/BookCard';
export function BookDetail() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  // Mock book data - in a real app, you would fetch this based on the ID
  const book = {
    id: id || '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    rating: 4.7,
    reviewCount: 2453,
    pages: 180,
    language: 'English',
    publishDate: 'April 10, 1925',
    publisher: "Charles Scribner's Sons",
    fileSize: '2.4 MB',
    category: 'Fiction',
    tags: ['Classic', 'American Literature', '20th Century', 'Novel']
  };
  // Mock related books
  const relatedBooks = [{
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.8
  }, {
    id: '3',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.6
  }, {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.7
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
  }} className="bg-gradient-to-b from-gray-50 to-white min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <motion.div initial={{
        opacity: 0,
        x: -20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.5
      }} className="mb-6">
          <Link to="/" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <ChevronLeftIcon size={16} className="mr-1" />
            Back to Home
          </Link>
        </motion.div>
        {/* Book Details */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Book Cover */}
            <motion.div initial={{
            opacity: 0,
            x: -30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="w-full md:w-1/3 lg:w-1/4">
              <motion.div whileHover={{
              scale: 1.05
            }} transition={{
              duration: 0.3
            }} className="rounded-lg overflow-hidden shadow-lg">
                <img src={book.coverImage} alt={`Cover of ${book.title}`} className="w-full object-cover" />
              </motion.div>
              <div className="mt-6 space-y-4">
                <motion.button whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.97
              }} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 px-4 rounded-md flex items-center justify-center shadow-md">
                  <BookOpenIcon size={18} className="mr-2" />
                  Read Now
                </motion.button>
                <motion.button whileHover={{
                scale: 1.03
              }} whileTap={{
                scale: 0.97
              }} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white py-3 px-4 rounded-md flex items-center justify-center shadow-md">
                  <DownloadIcon size={18} className="mr-2" />
                  Download PDF
                </motion.button>
                <div className="flex space-x-3">
                  <motion.button whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(79, 70, 229, 0.1)'
                }} whileTap={{
                  scale: 0.95
                }} className="flex-1 border border-gray-300 hover:border-indigo-300 py-2 rounded-md flex items-center justify-center">
                    <BookmarkIcon size={18} className="text-indigo-600" />
                  </motion.button>
                  <motion.button whileHover={{
                  scale: 1.1,
                  backgroundColor: 'rgba(79, 70, 229, 0.1)'
                }} whileTap={{
                  scale: 0.95
                }} className="flex-1 border border-gray-300 hover:border-indigo-300 py-2 rounded-md flex items-center justify-center">
                    <ShareIcon size={18} className="text-indigo-600" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
            {/* Book Info */}
            <motion.div initial={{
            opacity: 0,
            x: 30
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            duration: 0.7,
            delay: 0.2
          }} className="w-full md:w-2/3 lg:w-3/4">
              <motion.h1 initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.4
            }} className="text-3xl font-bold text-gray-800 mb-2">
                {book.title}
              </motion.h1>
              <motion.p initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.5
            }} className="text-xl text-gray-600 mb-4">
                by {book.author}
              </motion.p>
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.6
            }} className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => <StarIcon key={i} size={18} className={i < Math.floor(book.rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300 fill-gray-300'} />)}
                </div>
                <span className="ml-2 text-gray-700 font-medium">
                  {book.rating}
                </span>
                <span className="mx-2 text-gray-400">•</span>
                <span className="text-gray-600">
                  {book.reviewCount} reviews
                </span>
              </motion.div>
              <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} transition={{
              duration: 0.5,
              delay: 0.7
            }} className="prose max-w-none mb-8">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Description
                </h3>
                <p className="text-gray-700">{book.description}</p>
              </motion.div>
              <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div variants={item}>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-700">
                    Book Details
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Pages:</span>
                      <span className="font-medium">{book.pages}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Language:</span>
                      <span className="font-medium">{book.language}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Published:</span>
                      <span className="font-medium">{book.publishDate}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Publisher:</span>
                      <span className="font-medium">{book.publisher}</span>
                    </li>
                  </ul>
                </motion.div>
                <motion.div variants={item}>
                  <h3 className="text-lg font-semibold mb-3 text-indigo-700">
                    File Details
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium">PDF</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">File Size:</span>
                      <span className="font-medium">{book.fileSize}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Category:</span>
                      <Link to={`/categories/${book.category.toLowerCase()}`} className="font-medium text-indigo-600 hover:text-indigo-800">
                        {book.category}
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </motion.div>
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.8
            }}>
                <h3 className="text-lg font-semibold mb-3 text-indigo-700">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {book.tags.map(tag => <motion.div key={tag} whileHover={{
                  scale: 1.1
                }} whileTap={{
                  scale: 0.95
                }}>
                      <Link to={`/tags/${tag.toLowerCase().replace(/\s+/g, '-')}`} className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full">
                        {tag}
                      </Link>
                    </motion.div>)}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        {/* Preview Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Book Preview
          </h2>
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-lg p-8 text-center">
            <p className="text-gray-600 mb-4">
              Preview the first few pages of this book
            </p>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-2 px-6 rounded-md flex items-center mx-auto shadow-md">
              <BookOpenIcon size={18} className="mr-2" />
              Read Preview
            </motion.button>
          </div>
        </motion.div>
        {/* Related Books */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            You May Also Like
          </h2>
          <motion.div variants={container} initial="hidden" animate="show" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBooks.map((book, index) => <motion.div key={book.id} variants={item} custom={index}>
                <BookCard {...book} />
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>;
}