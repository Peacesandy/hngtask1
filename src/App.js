import profileimg from './assets/peace.JPG'
import shareButton1 from './assets/share-left.png'
import shareButton2 from './assets/share-dot.png'

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
         <img
         className='share-btn-desktop'
         src={shareButton1}
         alt='share button desktop'
         />
         <img
         className='share-btn-mobile'
         src={shareButton2}
         alt='share button mobile'
         />
         <h1 id='twitter'>peacesandy3</h1>
         <p id='slack'>Peace Sandy</p>
      </section>
      <section className='links-section'>
        <a href='http://twitter.com/PeaceSandy3'
        id='twitter_link'>
          Twitter Link
        </a>
        <a 
          href="https://training.zuri.team/" 
          id="btn__zuri">
          Zuri Team
        </a>
        <a 
          href="http://books.zuri.team" 
          id="books">
          Zuri Books 
        </a>
        <a 
          href="https://books.zuri.team/python-for-beginners?ref_id=PeaceSandy" 
          id="book__python">
          Python Books
        </a>
        <a 
          href="https://background.zuri.team" 
          id="pitch">
          Background Check for Coders
        </a>
        <a 
          href="https://books.zuri.team/design-rules" 
          id="book__design">
          Design Books
        </a>
      </section>
    </main>
    </>
  );
}




export default App;
