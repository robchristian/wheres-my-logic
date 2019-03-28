import React from 'react';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const loadable = (importFn) => Loadable({
  loader: importFn,
  loading: Loading,
});

export default loadable;
