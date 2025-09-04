import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { SearchIcon, FilterIcon, XIcon } from 'lucide-react';
import { BookCard } from '../components/BookCard';
export function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);
  // Mock search results
  const searchResults = [{
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.7
  }, {
    id: '2',
    title: 'Gatsby: The Definitive Guide',
    author: 'Jason Lengstorf',
    coverImage: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Programming',
    rating: 4.5
  }, {
    id: '3',
    title: 'The Gatsby Girls',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.3
  }, {
    id: '4',
    title: 'The Great Gatsby: A Graphic Novel Adaptation',
    author: 'K. Woodman-Maynard',
    coverImage: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Graphic Novel',
    rating: 4.2
  }, {
    id: '5',
    title: 'The Great Gatsby: The Revised and Rewritten Manuscript',
    author: 'F. Scott Fitzgerald',
    coverImage: 'https://images.unsplash.com/photo-1603162525937-96dbdab9b3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.6
  }, {
    id: '6',
    title: 'Gatsby: A Novel',
    author: 'Michael Farris Smith',
    coverImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    category: 'Fiction',
    rating: 4.0
  }];
  // Mock categories for filter
  const categories = [{
    name: 'Fiction',
    count: 4
  }, {
    name: 'Programming',
    count: 1
  }, {
    name: 'Graphic Novel',
    count: 1
  }, {
    name: 'Classic Literature',
    count: 3
  }, {
    name: 'Historical Fiction',
    count: 2
  }];
  // Mock languages for filter
  const languages = [{
    name: 'English',
    count: 6
  }, {
    name: 'Spanish',
    count: 2
  }, {
    name: 'French',
    count: 1
  }, {
    name: 'German',
    count: 1
  }];
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]);
  };
  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => prev.includes(language) ? prev.filter(l => l !== language) : [...prev, language]);
  };
  const toggleFilter = () => {
    setFilterOpen(!filterOpen);
  };
  return <div className="bg-gray-50 min-h-screen w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Search Results
          </h1>
          <p className="text-gray-600">
            Found {searchResults.length} results for "{query}"
          </p>
        </div>
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-2xl">
              <input type="text" defaultValue={query} placeholder="Search for books..." className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <button onClick={toggleFilter} className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 md:hidden">
              <FilterIcon size={18} className="mr-2" />
              Filters
            </button>
            <div className="hidden md:flex items-center gap-4">
              <span className="text-gray-700">Sort by:</span>
              <select className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Relevance</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
                <option>Title A-Z</option>
              </select>
            </div>
          </div>
          {/* Mobile Filters */}
          {filterOpen && <div className="mt-4 md:hidden border-t border-gray-200 pt-4">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold text-gray-800">Filters</h3>
                <button onClick={toggleFilter}>
                  <XIcon size={18} className="text-gray-600" />
                </button>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-gray-700 mb-2">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => <div key={category.name} className="flex items-center">
                      <input type="checkbox" id={`category-mobile-${category.name}`} checked={selectedCategories.includes(category.name)} onChange={() => toggleCategory(category.name)} className="rounded text-blue-600 focus:ring-blue-500" />
                      <label htmlFor={`category-mobile-${category.name}`} className="ml-2 text-gray-700">
                        {category.name} ({category.count})
                      </label>
                    </div>)}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-gray-700 mb-2">Languages</h4>
                <div className="space-y-2">
                  {languages.map(language => <div key={language.name} className="flex items-center">
                      <input type="checkbox" id={`language-mobile-${language.name}`} checked={selectedLanguages.includes(language.name)} onChange={() => toggleLanguage(language.name)} className="rounded text-blue-600 focus:ring-blue-500" />
                      <label htmlFor={`language-mobile-${language.name}`} className="ml-2 text-gray-700">
                        {language.name} ({language.count})
                      </label>
                    </div>)}
                </div>
              </div>
              <div className="mt-4 flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                  Apply Filters
                </button>
                <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-50">
                  Reset
                </button>
              </div>
            </div>}
        </div>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden md:block w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <h3 className="font-semibold text-gray-800 mb-4">Filters</h3>
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Categories</h4>
              <div className="space-y-2">
                {categories.map(category => <div key={category.name} className="flex items-center">
                    <input type="checkbox" id={`category-${category.name}`} checked={selectedCategories.includes(category.name)} onChange={() => toggleCategory(category.name)} className="rounded text-blue-600 focus:ring-blue-500" />
                    <label htmlFor={`category-${category.name}`} className="ml-2 text-gray-700">
                      {category.name} ({category.count})
                    </label>
                  </div>)}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Languages</h4>
              <div className="space-y-2">
                {languages.map(language => <div key={language.name} className="flex items-center">
                    <input type="checkbox" id={`language-${language.name}`} checked={selectedLanguages.includes(language.name)} onChange={() => toggleLanguage(language.name)} className="rounded text-blue-600 focus:ring-blue-500" />
                    <label htmlFor={`language-${language.name}`} className="ml-2 text-gray-700">
                      {language.name} ({language.count})
                    </label>
                  </div>)}
              </div>
            </div>
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-3">Rating</h4>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map(rating => <div key={rating} className="flex items-center">
                    <input type="checkbox" id={`rating-${rating}`} className="rounded text-blue-600 focus:ring-blue-500" />
                    <label htmlFor={`rating-${rating}`} className="ml-2 text-gray-700 flex items-center">
                      {[...Array(5)].map((_, i) => <span key={i}>
                          {i < rating ? <StarIcon size={16} className="text-yellow-400 fill-yellow-400" /> : <StarIcon size={16} className="text-gray-300 fill-gray-300" />}
                        </span>)}
                      {rating === 1 ? ' & up' : ''}
                    </label>
                  </div>)}
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-700 mb-3">File Format</h4>
              <div className="space-y-2">
                {['PDF', 'EPUB', 'MOBI'].map(format => <div key={format} className="flex items-center">
                    <input type="checkbox" id={`format-${format}`} className="rounded text-blue-600 focus:ring-blue-500" />
                    <label htmlFor={`format-${format}`} className="ml-2 text-gray-700">
                      {format}
                    </label>
                  </div>)}
              </div>
            </div>
            <div className="mt-6">
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Apply Filters
              </button>
              <button className="w-full border border-gray-300 mt-2 py-2 rounded-md hover:bg-gray-50">
                Reset
              </button>
            </div>
          </div>
          {/* Search Results */}
          <div className="flex-grow">
            {/* Sort dropdown (mobile) */}
            <div className="md:hidden mb-4">
              <label className="text-gray-700 mb-1 block">Sort by:</label>
              <select className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Relevance</option>
                <option>Newest First</option>
                <option>Highest Rated</option>
                <option>Title A-Z</option>
              </select>
            </div>
            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.map(book => <BookCard key={book.id} {...book} />)}
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
        </div>
      </div>
    </div>;
}
// This component is missing from the imports but is used in the code
function StarIcon(props: any) {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>;
}