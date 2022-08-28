import { createSlice } from '@reduxjs/toolkit';

export const MarkdownSlicer = createSlice({
  name: 'markdown',
  initialState: {
    text: 'this is user input',
    exampleText: `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

*[Herman Fassett](https://freecodecamp.com/hermanfassett)*`,
    hintStatus: false,
  },

  reducers: {
    setText: (state, action) => {
      state.text = action.payload.text;
    },
    toggleHintStatus: (state, _) => {
      state.hintStatus = !state.hintStatus;
    },
  },
});

export const { setText, toggleHintStatus } = MarkdownSlicer.actions;
export default MarkdownSlicer.reducer;
