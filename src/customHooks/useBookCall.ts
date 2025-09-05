import  { useEffect, useState } from 'react'

interface Book {
  key: string; // unique key from OpenLibrary
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

export default function useBookCall(){
    const [books,setBooks]=useState<Book[]>([])
    const [query,setQuery]=useState<string>('')
    useEffect(()=>{
        async function search():Promise<void> {
        try{
          const d=await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
           const data=await d.json()
           console.log('data'+data)
        
            setBooks(data.docs)
           
        }catch(error){
         console.log(error)
        };   
        }
        if(query){
            search()
        }
    },[query])
  return {books,setQuery}
}
