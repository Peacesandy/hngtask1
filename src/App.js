import profileimg from './assets/peace.JPG'

function App() {
  return (
    <>
    <main className="main-container">
      <section className="profile-section">
         <img
         id="profile_img"
         src={profileimg}
         alt='profile img'
         />
      </section>
    </main>
    </>
  );
}




export default App;
