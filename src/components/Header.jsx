import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-16'> {/* Tailwind utility classes added here. mt ---> magin-top and so on. */}
      <img src={logo} alt="A canvas" className='mb-8 w-44 h-44 object-contain'/> {/* object-contain ---> makes sure that the object is not distorted */}
      <h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 '>ReactArt</h1>
      {/* tracking-widest ---> Add spacing between the characters
      text-amber-800 ---> adds text color */}
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
