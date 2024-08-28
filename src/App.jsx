// import logo from './logo.svg';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// import React from 'react';
// import FacebookCard from './components/FacebookCard';

// function App() {
//   return (

//     <div className="m-5 d-flex">
//       <FacebookCard
//         profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/455719776_485742307725097_1938391807194180264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-uRoinyl0_4Q7kNvgH6oEmJ&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAqRxDaqzWDNYif-4FLHnbiVNjkjoKODZmCuQA4AWT29g&oe=66D4BEBD"
//         userName="Shoaib Raza"
//         postTime="2 hours ago"
//         postContent="This is a sample post content. It could be a status update or a photo."
//         postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/432934985_956090242971387_5446809714084545517_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DoS5ogbcpboQ7kNvgFatkdF&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYD7ECdvjusYk_s54j8KGbjSI2BAT_Hec683b4uBkSEmFA&oe=66D51B95"
//       />
//       <FacebookCard
//         profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/456196555_831231345818453_9025022115450927149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yoNarkJbP9YQ7kNvgHRr7Vq&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AohrKBrRbtjcbb7ZBsbCWth&oh=00_AYBYQxOnrnZYtVe1p2r82GXVbF0k8qfiP5BNqUW5KoRSdg&oe=66D4E16C"
//         userName="Bilal"
//         postTime="1 hours ago"
//         postContent="This is a sample post content. It could be a status update or a photo."
//         postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/452134883_813621044246150_6478643214754413235_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tzsmabhgubcQ7kNvgHGI7HV&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYBxlRMw7iJdcNJ3xphmLaSvMxClBuLYXucTCNr14RC7Yg&oe=66D52888"
//       />
//       <FacebookCard
//         profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/437853177_122140607966128056_6846888667709868623_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=SY_9qBW7KqMQ7kNvgFFhzEh&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAPUqbGjIcmvELuv80bv4U0SCXjhRsqBWrLaE9348dQuA&oe=66D4E991"
//         userName="Hassan"
//         postTime="5 hours ago"
//         postContent="This is a sample post content. It could be a status update or a photo."
//         postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/457172539_122164732982128056_6515543601442426688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RJuP5SeVGlUQ7kNvgHc7t9w&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYBqtcmJBWkCCJcdijgYLjZNclIYfXLTLBFPTmcoxKNuFg&oe=66D4CF65"
//       />
//     </div>
//   );
// }

// export default App;







import React from 'react';
import FacebookCard from './components/FacebookCard';

function App() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#007bff' }}>
          Facebook Cards
        </h1>
        <div>
          <button className="btn btn-primary me-2">Login</button>
          <button className="btn btn-success">Sign Up</button>
        </div>
      </div>

      <div className="d-flex">
        <FacebookCard
          profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/455719776_485742307725097_1938391807194180264_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=-uRoinyl0_4Q7kNvgH6oEmJ&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAqRxDaqzWDNYif-4FLHnbiVNjkjoKODZmCuQA4AWT29g&oe=66D4BEBD"
          userName="Shoaib Raza"
          postTime="2 hours ago"
          postContent="This is a sample post content. It could be a status update or a photo."
          postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/432934985_956090242971387_5446809714084545517_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=DoS5ogbcpboQ7kNvgFatkdF&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYD7ECdvjusYk_s54j8KGbjSI2BAT_Hec683b4uBkSEmFA&oe=66D51B95"
        />
        <FacebookCard
          profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/456196555_831231345818453_9025022115450927149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=yoNarkJbP9YQ7kNvgHRr7Vq&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=AohrKBrRbtjcbb7ZBsbCWth&oh=00_AYBYQxOnrnZYtVe1p2r82GXVbF0k8qfiP5BNqUW5KoRSdg&oe=66D4E16C"
          userName="Bilal"
          postTime="1 hours ago"
          postContent="This is a sample post content. It could be a status update or a photo."
          postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/452134883_813621044246150_6478643214754413235_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=tzsmabhgubcQ7kNvgHGI7HV&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYBxlRMw7iJdcNJ3xphmLaSvMxClBuLYXucTCNr14RC7Yg&oe=66D52888"
        />
        <FacebookCard
          profileImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/437853177_122140607966128056_6846888667709868623_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=SY_9qBW7KqMQ7kNvgFFhzEh&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYAPUqbGjIcmvELuv80bv4U0SCXjhRsqBWrLaE9348dQuA&oe=66D4E991"
          userName="Hassan"
          postTime="5 hours ago"
          postContent="This is a sample post content. It could be a status update or a photo."
          postImage="https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-6/457172539_122164732982128056_6515543601442426688_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=RJuP5SeVGlUQ7kNvgHc7t9w&_nc_ht=scontent.fkhi17-1.fna&oh=00_AYBqtcmJBWkCCJcdijgYLjZNclIYfXLTLBFPTmcoxKNuFg&oe=66D4CF65"
        />
      </div>
    </div>
  );
}

export default App;
