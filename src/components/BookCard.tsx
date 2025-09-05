import React from 'react';
import { Link } from 'react-router-dom';
import { DownloadIcon, BookOpenIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface bookData {
  
  key: string; // unique key from OpenLibrary
  cover_i:string
  language:string[]
  title:string
  author_name:string[]
}
interface bookCardProps{
  book:bookData
  index:number
}
export function BookCard({book,index}:bookCardProps) {
  console.log(book)
  console.log(index)
  const URL=book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
   :
   "https://via.placeholder.com/150x200?text=No+Cover"
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5
  }} whileHover={{
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      duration: 0.3
    }
  }} className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link to={`/book/${index}`}>
        <div className="relative h-56 overflow-hidden">
          <motion.img whileHover={{
          scale: 1.05
        }} transition={{
          duration: 0.5
        }} src={URL} alt={`Cover of ${index} by `} className="w-full h-full object-cover" />
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">
            {book.language?.[0] || 'unknown'}
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <span className="text-xs font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 px-2 py-1 rounded">
              {book.title}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/book/${index}`} className="hover:text-indigo-600">
          <h3 className="font-bold text-gray-800 mb-1 line-clamp-1">{}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-3">by {book.author_name[0]}</p>
        <div className="flex justify-between">
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Link to={`/book/${index}`} className="flex items-center text-sm text-indigo-600 hover:text-indigo-800">
              <BookOpenIcon size={16} className="mr-1" />
              Read Now
            </Link>
          </motion.div>
          <motion.div whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <Link to={`/book/${index}/download`} className="flex items-center text-sm text-emerald-600 hover:text-emerald-800">
              <DownloadIcon size={16} className="mr-1" />
              Download PDF
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}