import './App.css';
import React,{useState} from 'react';
import ReactMarkdown from 'markdown-to-jsx'

function Markdown() {

  const [text,setText]=useState('#Markdown')
  return (
    <main>
      <section>
        <textarea value={text} onChange={(e)=>setText(e.target.value)}></textarea>
        <article>
          <ReactMarkdown>
            {text}
          </ReactMarkdown>
          </article>
      </section>
    </main>
  );
}

export default Markdown;
