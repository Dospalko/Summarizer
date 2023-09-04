

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <h2 className="text-3xl">D3vminik</h2>

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Sumarizacia clankov s pomocou <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Zjednodušite svoje čítanie s touto webovou aplikáciou  která pretvára dlhé články do jasných a stručných shrnutí.
      </h2>
    </header>
  );
};

export default Hero;