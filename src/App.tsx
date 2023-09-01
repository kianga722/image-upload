import React from 'react';
import GalleryContextProvider from './contexts/GalleryContext';
import UploadContextProvider from './contexts/UploadContext';

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

      <GalleryContextProvider initialSelectedImage={null}>
        <UploadContextProvider initialModalOpen={false}>
          <div id='content-wrapper'>
            <Header />
            
            <Gallery />

            <ImageModal />

            <UploadModal />
          </div>
        </UploadContextProvider>
      </GalleryContextProvider>
    </>
  );
}

export default App;
