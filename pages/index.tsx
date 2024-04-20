import * as React from 'react';
import Counter from '../components/Counter';
import load from '../load-script';

const Page = () => {
    const ref = React.useRef();
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
            <Counter />
        </div>
    );
};

export default Page;
