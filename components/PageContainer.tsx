"use client";

import * as React from 'react';
import load from '../load-script';
import Counter from './Counter';

const PageContainer = () => {
    const ref = React.useRef();
    const [showCounter, setShowCounter] = React.useState(false);

    React.useEffect(() => {
        load('/injected.js', function (err, script) {
            if (err) {
              // print useful message
            }
            else {
              console.log(script.src);// Prints 'foo'.js'
              const windoObj:any = window;
              windoObj.injected(ref.current);
              // use script
              // note that in IE8 and below loading error wouldn't be reported
            }
          })
    }, []);

    return (
        <div ref={ref}>
            <div data-testid="sample">Hello</div>
            {
                showCounter ? (
                    <Counter />
                ) : null
            }
            <button style={{ marginTop: '10px' }} onClick={() => setShowCounter((prev) => !prev)}>
                {showCounter ? 'Hide Counter' : 'Show Counter'}
            </button>
        </div>
    );
};

export default PageContainer;
