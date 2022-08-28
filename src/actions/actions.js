import { useSelector } from 'react-redux';
import { setText, toggleHintStatus } from '../redux/Markdown/MarkdownSlicer';
import { store } from '../redux/store';

export const dispatch = store.dispatch;
export const getText = () => useSelector((state) => state.markdown.text);
export const getExampleText = () => {
  return useSelector((state) => state.markdown.exampleText);
};

export const handleText = (event) => {
  dispatch(setText({ text: event.target.value }));
};

export const getHintStatus = () => {
  return useSelector((state) => state.markdown.hintStatus);
};

export const handleHintStatus = () => {
  dispatch(toggleHintStatus());
};
