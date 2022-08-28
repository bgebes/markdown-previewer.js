import { configureStore } from '@reduxjs/toolkit';
import MarkdownReducer from './Markdown/MarkdownSlicer';

export const store = configureStore({
  reducer: {
    markdown: MarkdownReducer,
  },
});
