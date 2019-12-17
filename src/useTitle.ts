import * as React from 'react';

function useTitle(title: string) {
  const t = React.useRef<string>();

  if (t.current !== title) {
    document.title = t.current = title;
  }
}

export default typeof document !== 'undefined' ? useTitle : (_title: string) => {};
