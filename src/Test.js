import React from 'react';
import Markdown from 'markdown-to-jsx';

const MyParagraph = ({ children, ...props }) => (
    <div {...props}>{children}</div>
);
 
function Test() {
    return(
        <Markdown
        options={{
            overrides: {
                h1: {
                    component: MyParagraph,
                    props: {
                        className: 'foo',
                    },
                },
            },
        }}
    >
        # Hello world!
    </Markdown>
    );
}

export default Test;

/*
    renders:
 
    <div class="foo">
        Hello World
    </div>
 */