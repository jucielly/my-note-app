import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto', sans-serif;
  
}
button {
    cursor: pointer;
}
button:focus {
    outline: none;
}
input:focus {
    outline: none;
}
fieldset{
    border: none;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

ul {
    list-style-type: none;
}
.notes-masonry-grid {
  margin: 15px;
  display: -webkit-box; /* Not needed if autoprefixing */
  display: -ms-flexbox; /* Not needed if autoprefixing */
  display: flex;
  margin-left: 0; /* gutter size offset */
  width: auto;
}
.notes-masonry-grid_column {
  padding-left: 15px; /* gutter size */
  background-clip: padding-box;
}

/* Style your items */
.notes-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
  margin-bottom: 15px;
}
`;

