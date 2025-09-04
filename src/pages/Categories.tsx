import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeftIcon, BookIcon, BookOpenIcon, TagIcon } from 'lucide-react';
import { BookCard } from '../components/BookCard';
export function Categories() {
  const {
    category
  } = useParams<{
    category: string;
  }>();
  // Mock category data
  const categories = {
    fiction: {
      title: 'Fiction',
      description: 'Explore worlds of imagination and storytelling through our collection of fiction books.',
      icon: <BookIcon className="h-8 w-8 text-blue-600" />,
      color: 'blue'
    },
    'non-fiction': {
      title: 'Non-Fiction',
      description: 'Discover knowledge, facts, and real-world insights through our non-fiction collection.',
      icon: <BookOpenIcon className="h-8 w-8 text-green-600" />,
      color: 'green'
    },
    academic: {
      title: 'Academic',
      description: 'Advance your knowledge with our collection of academic books, journals, and research papers.',
      icon: <TagIcon className="h-8 w-8 text-yellow-600" />,
      color: 'yellow'
    },
    'sci-fi': {
      title: 'Science Fiction',
      description: 'Explore futuristic worlds, technology, and scientific possibilities through our sci-fi collection.',
      icon: <BookIcon className="h-8 w-8 text-purple-600" />,
      color: 'purple'
    }
  };
  const currentCategory = category ? categories[category as keyof typeof categories] : null;
  // Mock books for the selected category
  const books = [{
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
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.6
  }, {
    id: '4',
    title: '1984',
    author: 'George Orwell',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.5
  }, {
    id: '5',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    coverImage: 'https://images.unsplash.com/photo-1603162525937-96dbdab9b3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.4
  }, {
    id: '6',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    coverImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.7
  }, {
    id: '7',
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.6
  }, {
    id: '8',
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.5
  }];
  // If category doesn't exist, show all categories
  if (!currentCategory) {
    return <div className="bg-gray-50 min-h-screen w-full">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Browse Categories
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(categories).map(([key, category]) => <Link key={key} to={`/categories/${key}`} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </Link>)}
          </div>
        </div>
      </div>;
  }
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link to="/categories" className="flex items-center text-blue-600 hover:text-blue-800">
            <ChevronLeftIcon size={16} className="mr-1" />
            All Categories
          </Link>
        </div>
        {/* Category Header */}
        <div className={`bg-${currentCategory.color}-50 rounded-lg shadow-sm p-6 mb-8`}>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className={`bg-${currentCategory.color}-100 p-4 rounded-full`}>
              {currentCategory.icon}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {currentCategory.title}
              </h1>
              <p className="text-gray-600 max-w-3xl">
                {currentCategory.description}
              </p>
            </div>
          </div>
        </div>
        {/* Filter and Sort */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Filter:</span>
              <select className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>All {currentCategory.title}</option>
                <option>New Releases</option>
                <option>Bestsellers</option>
                <option>Free Only</option>
              </select>
            </div>
            <div className="flex items-center">
              <span className="text-gray-700 mr-2">Sort by:</span>
              <select className="border border-gray-300 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Popularity</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
                <option>Title A-Z</option>
              </select>
            </div>
          </div>
        </div>
        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map(book => <BookCard key={book.id} {...book} />)}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Previous
            </button>
            <button className="px-3 py-1 bg-blue-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              2
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              3
            </button>
            <span className="px-2 text-gray-500">...</span>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              10
            </button>
            <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>;
}