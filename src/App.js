import React, { useState, useEffect, useRef } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';
import hljs from "highlight.js";
import './App.css';

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);
  const [history, setHistory] = useState([defaultMarkdown]);
  const [currentStep, setCurrentStep] = useState(0);
  const textareaRef = useRef(null);

  // This function is called whenever the user types something in the #editor/textarea
  
  // function handleChange(event) {         THIS IS ANOTHER WAY ENTERING TEXT
  //   setMarkdown(event.target.value);     IF ENABLE THIS, ENABLE ALSO THE CODE WHICH COMMENTED IN THE #editor/textarea
  // }                                       

  // This hook is called whenever the `markdown` state changes
  // It uses the `marked` library to convert the Markdown text into HTML
  // and then updates the `innerHTML` of the preview panel with the result
  marked.setOptions({
    renderer: new marked.Renderer(),
    // Highlight JavaScript code
    highlight: function(code, lang) {
      const hljs = require('highlight.js');
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    gfm: true,
    tables: true,
    breaks: true, // Make this 'true' to pass the last test
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  useEffect(() => {
    document.getElementById("preview").innerHTML = marked(markdown);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [markdown]);

  // Handle undo function
  function handleUndo() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setMarkdown(history[currentStep - 1]);
    }
  }

  // Handle redo function
  function handleRedo() {
    if (currentStep < history.length - 1) {
      setCurrentStep(currentStep + 1);
      setMarkdown(history[currentStep + 1]);
    }
  }

    // Handle reset function
    function handleReset() {
      setMarkdown(defaultMarkdown);
      setHistory([defaultMarkdown]);
      setCurrentStep(0);
      textareaRef.current.focus();
    }

  // Handle change function in textarea
  function handleChange(event) {
    const { value } = event.target;
    const lastWord = value.split(" ").pop();
    const lastChar = value.charAt(value.length - 1);
    const isLastCharSpace = /\s/g.test(lastChar);
  
    // Compare the last word of the old and new values
    if (isLastCharSpace) {
      setMarkdown(value);
      setHistory([...history.slice(0, currentStep + 1), value]);
      setCurrentStep(currentStep + 1);
    } else if (lastWord === "undo") {
      handleUndo();
    } else if (lastWord === "redo") {
      handleRedo();
    } else {
      setMarkdown(value);
    }
  }

  // Handle key press events
  function handleKeyPress(event) {
    if (event.ctrlKey || event.metaKey) {
      switch (event.code) {
        case "KeyZ":
          event.preventDefault();
          handleUndo();
          break;
        case "KeyY":
          event.preventDefault();
          handleRedo();
          break;
        case "KeyR":
          event.preventDefault();
          handleReset();
          break;
        case "KeyE":
          event.preventDefault();
          setMarkdown('');
          break;    
          default:
          break;
      }
    }
  }

  return (
    <div
      className="markdown-previewer"
      onKeyDown={handleKeyPress}
      tabIndex="0"
      >
    
    <div className="container">
          {/* App Title */}  
          <div className="row mt-4">
            <div className="col text-center">
              <p className="app-title">
                  Markdown Previewer
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between mb-2">
              <button onClick={handleUndo} disabled={currentStep === 0}><i class="fas fa-undo"></i></button>
              <button onClick={handleRedo} disabled={currentStep === history.length - 1}><i class="fas fa-redo"></i></button>
              <button onClick={handleReset}><i class="fa fa-refresh" aria-hidden="true"></i></button>
              <button onClick={() => setMarkdown('')}><i class="fa-solid fa-eraser"></i></button>
            </div>
          
          <div className="row mt-4">
            <div className="col-md-6">
            {/* Sub Title-1 */}
              <div className="col text-center">
                <h4 className="editor-title text-align-center">
                    Input
                </h4>
              </div>
               {/* Textarea element that is bound to the `markdown` state */}
                {/* <textarea id="editor" onChange={handleChange} value={markdown} /> ENABLE THIS IF YOU ENABLE THE onChange function */}
                <textarea
                  id="editor"
                  onChange={handleChange}
                  value={markdown}
                  ref={textareaRef}
                    />
            </div>

            <div className="col-md-6">
            {/* Sub Title-2 */}
              <div className="col text-center">
                <h4 className="preview-title text-align-center">
                    Output
                </h4>
              </div>
                {/* Preview panel that displays the rendered Markdown */}
                <div
                  id="preview"
                  dangerouslySetInnerHTML={{
                    __html: marked(markdown),
                  }}
                ></div>
            </div>
          </div>
          
          <div className="col text-center">
              <p>
                Coded by <a rel="noreferrer" target="_blank" href="https://github.com/gpapillera">gpapillera</a>
              </p>
            </div>

      </div>

    </div>
  );
}

// Default Markdown text
const defaultMarkdown =
`# My Markdown Previewer!

## H2 sub-heading...

### H3 sub-heading

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and


> Block Quotes!


And if you want to get really crazy, even tables:


Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.



- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:


![freeCodeCamp Logo](https://p.kindpng.com/picc/s/128-1280187_github-logo-png-github-transparent-png.png)
`;

export default MarkdownPreviewer;