import React from 'react';
import owl1 from './images/owl1.svg'

export default function App() {
  return (
    <>
        <nav className='navigation'>
            <div className='navigation__block limited__container'>
                <div className='navigation__content content__navigation'>
                    <div className='content__navigation-logo'>
                        <img src={ owl1 } alt='Logo' />
                    </div>
                </div>
            </div>
        </nav>

        <main>
            Main
        </main>

        <footer>
            Footer
        </footer>
    </>
  );
}