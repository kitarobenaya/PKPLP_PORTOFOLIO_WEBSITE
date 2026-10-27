import { useState } from 'react'  

  function ButtonNav({id, name, clickFunc}) {
    return(
  <button id={id} className={`navbut flex justify-center items-center w-36 h-12 rounded-full p-1.5 text-white text-shadow-[3px_3px_2px_rgba(0,0,0,0.4)] font-bold text-2xl font-[Montserrat] hover:cursor-pointer`}>{name}</button>
    )
  }

function App() {

  function HandleClick(){
  }

  return (
    <>
      <header className='w-fit h-fit flex justify-center bg-custcyan rounded-full items-center shadow-md mt-6 sticky'>
          < ButtonNav id={"home"} name={"Home"}/>
          < ButtonNav id={"member"} name={"Member"} />
          < ButtonNav id={"about"} name={"About Us"} />
          < ButtonNav id={"project"} name={"Project"} />
      </header>
    </>
  )
}

export default App
