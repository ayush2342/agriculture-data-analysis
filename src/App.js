import React from 'react';
import { MantineProvider } from '@mantine/core';
import DataTables from './components/DataTables';

const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">
        <DataTables />
      </div>
    </MantineProvider>
  );
};

export default App;
