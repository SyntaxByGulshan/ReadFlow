 import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface bookData{
    key:string,
    
}
const initialState:bookData[]=[]

export const searchedBookSlice=createSlice({
    name:'searchdBooks' ,
    initialState,
    reducers:{
       updateSearchBooks:(state , action: PayloadAction<bookData[]>) => {
         console.log(state)
         console.log('action.payload from slice')
         console.log(action.payload)
          return action.payload
       }
       
    }

}  
)

export default searchedBookSlice.reducer
export const {updateSearchBooks}=searchedBookSlice.actions