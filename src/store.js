import { configureStore } from '@reduxjs/toolkit'
import watchlistReducer from './components/watchlistSlice'

const store = configureStore({
  reducer: watchlistReducer
})

export default store