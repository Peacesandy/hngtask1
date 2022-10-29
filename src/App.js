import profileimg from './assets/peace.JPG'
import slacklogo from './assets/slackicon.png'
import gitHubLogo from './assets/Icon.png'
import Zurilogo from './assets/zuri internship.png'
import I4Glogo from './assets/I4G.png'
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
         <h1 id='twitter'>PeaceSandy3</h1>
         <p id='slack'>Peace Sandy</p>
      </section>
      <section className='links-section'>
        <a href='http://twitter.com/PeaceSandy3'
        target='_blank'
        id='twitter'>
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
      <section className='otherlinks'>
          <img src={slacklogo} alt='Slack logo'/>
          <a href='https://github.com/Peacesandy'>
            <img src={gitHubLogo} alt='GitHub logo'/>
          </a>
      </section>
    </main>
    <footer id='footer-container'>
       <hr/>
       <div className="footer-contents">
        <img 
        className="zurilogo"
        src={Zurilogo} 
        alt="Zuri Internship logo" />
        <p 
          className="footer-text">
            HNG Internship 9 Frontend Task
        </p>
        <img 
        className="I4Glogo"
        src={I4Glogo} 
        alt="I4G logo" />
        </div>
    </footer>
    </>
  );
}




export default App;
