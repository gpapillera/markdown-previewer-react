import React, { useState, useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import marked from 'marked';
import './App.css';

function MarkdownPreviewer() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  // This function is called whenever the user types something in the #editor/textarea
  
  // function handleChange(event) {         THIS IS ANOTHER WAY ENTERING TEXT
  //   setMarkdown(event.target.value);     IF ENABLE THIS, ENABLE ALSO THE CODE WHICH COMMENTED IN THE #editor/textarea
  // }                                       

  // This hook is called whenever the `markdown` state changes
  // It uses the `marked` library to convert the Markdown text into HTML
  // and then updates the `innerHTML` of the preview panel with the result
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const hljs = require('highlight.js');
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-',
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
  });

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown);
  }, [markdown]);

  return (
    <div className="markdown-previewer">
    
    <div className="container">
          {/* App Title */}  
          <div className="row mt-4">
            <div className="col text-center">
              <p className="app-title">
                  Markdown Previewer
              </p>
            </div>
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
                  onChange={(event) => {
                    setMarkdown(event.target.value);
                    }} value={markdown}
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
`# My React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`\`\`<div></div>\`\`\`, between 2 backticks.

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