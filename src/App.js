// import React from 'react'
// import Header from './components/Header'
// import Sidebar from './components/Sidebar'
// import Content from './components/Content'
// export default function App() {
//   return (
//     <>
//     <div className='app'>
//       {/* <Header/>
//       <Sidebar/> */}
//       <Content/>
//     </div>
//     </>
//   )
// }




import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

export default function App() {
  return (
    <div className="app h-screen flex flex-col">
      <Header />
      <div className="flex flex-grow">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}
