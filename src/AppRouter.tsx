import {  Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { BookDetail } from './pages/BookDetail';
import { SearchResults } from './pages/SearchResults';
import { Categories } from './pages/Categories';
import AppOutlet from './AppOutlet';
export default function AppRouter() {
  const location = useLocation();
  return (
    <>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AppOutlet />}>
          <Route index element={<Home />} />
          <Route path="book/:id" element={<BookDetail />}  />
          <Route path="search" element={<SearchResults />} />
          <Route path="categories/:category" element={<Categories />} />
          <Route path="categories" element={<Categories />} />
        </Route>
      </Routes>
     
      </>
  )
}
