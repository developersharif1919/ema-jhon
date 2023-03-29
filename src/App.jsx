import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import image1 from './images/self.jpg'
import image2 from './images/self2.jpg'
import image3 from './images/self3.jpg'
import image4 from './images/self4.jpg'
import image5 from './images/self5.jpg'
import image6 from './images/self6.jpg'
import image7 from './images/self7.jpg'
import image8 from './images/self8.jpg'
import image9 from './images/group1.jpg'
import image10 from './images/group2.jpg'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'

function App() {
  // Image Popup Start
  const images = [
    {src: image1, alt: "Example Image 1"},
    {src: image2, alt: "Example Image 2"},
    {src: image3, alt: "Example Image 3"},
    {src: image4, alt: "Example Image 3"},
    {src: image5, alt: "Example Image 3"},
    {src: image6, alt: "Example Image 3"},
    {src: image7, alt: "Example Image 3"},
    {src: image8, alt: "Example Image 3"},
    {src: image9, alt: "Example Image 3"},
    {src: image10, alt: "Example Image 3"},
  ];
  const [count, setCount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 3000);

    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Handle close function 
  const handleClose = () => {
    setShowImage(false);
  };
  // Image Popup End

  // Website OutPut Show
  return (
    <div className="App">
      {/* Image Popup */}
      {showImage && (
        <div className="popup">
          <button onClick={handleClose}>X</button>
          <div className='popup-img'><img src={images[imageIndex].src} alt={images[imageIndex].alt} /></div>
        </div>
      )}
      <Header></Header>
      <Shop></Shop>
    </div>
  )
}
// Disable Developer tool
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('keydown', event => {
  if (event.keyCode === 123) { // F12 key
    event.preventDefault();
  }
});
document.addEventListener('keydown', event => {
  if (event.shiftKey && event.ctrlKey && (event.keyCode === 73 || event.keyCode === 74)) { // Shift + Ctrl + I or J
    event.preventDefault();
    // Do something here, such as displaying a message or redirecting to another page
  }
});
export default App
