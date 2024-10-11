import { createGlobalStyle } from "styled-components";




const GlobalStyle = createGlobalStyle`
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
  scroll-behavior: smooth;
  font-family: "DM Sans", sans-serif;

}
body {
  margin: 0;
  min-height: 100vh;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;

}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}

details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
    
`
export default GlobalStyle