import React from 'react';
import Header from './components/Header';
import Gallery from './components/Gallery';
import ImageModal from './components/ImageModal';
import UploadModal from './components/UploadModal';

import { Global } from '@emotion/react';
import { global } from './styles/global-style';

function App() {
  return (
    <>
      <Global styles={global} />

      <div id='content-wrapper'>
        <Header />
        
        <Gallery />

        <ImageModal />

        <UploadModal />
      </div>
    </>
  );
}

export default App;
