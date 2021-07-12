function App() {
  return (
    <div>
      <header>
        {/* 
          flex: Applies display:flex
          items-center: aligns the elements within the nav html tag
          p-6: Applies padding
          container: Sets max-width of an element to match min-width of the current breakpoint
          mx-auto: Applies margin:auto thus centering nav elements horizontally
        */}
        <nav className="flex items-center justify-between p-6 container mx-auto">
           <a href="#">
             <svg className="h-10 w-10" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 54 64"></svg>
           </a>
           {/* 
              text-lg:Applies slightly larger font size for te text inside element 
              text-gray-600: Applies gray color to the text within the element. {text-gray-100 - text-gray-900}
              hidden: Applies display:none
              lg:flex : Applies display:flex for larger screens
            */}
           <div class="text-lg text-gray-600 hidden lg:flex">
             {/* 
                 block:Applies display:block
                 mt-4:Applies margin to the top of the element
                 lg:inline-block : Applies inline element for larger devices, making the menu stay on one row
                 hover:text-gray-700 : Alters the color of the element on hover
                 lg:mt-0 : Dont apply margin top for larger devices
                 mr-10: Applies margin to right side of the elements
             */}
             <a href="#" class="block mt-4 lg:inline-block text-teal-600 lg:mt-0 mr-10">
               Home
             </a>
             <a href="#" class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
               Services
             </a>
             <a href="#" class="block mt-4 lg:inline-block hover:text-gray-700 lg:mt-0 mr-10">
               Portfolio
             </a>
           </div>
           <div className="flex items-center">
             <div class="mr-5 lg:mr-0">
               {/* rounded-md: Adds small border radius for the buttons and other utility classes */}
               <button className="py-2 px-6 rounded-md text-gray-600 hover:text-gray-700 text-lg">Sign in</button>
               <button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 rounded-md text-white text-lg">Sign up</button>
             </div>
             <div className="block lg:hidden">
               <button className="flex items-center px-4 py-3 border rounded text-teal-500 border-teal-500 focus:outline-none">
                 <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                   <title>Menu</title>
                   <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                 </svg>
               </button>
             </div>
           </div>
        </nav>
      </header>
      <main className="mt-12 lg:mt-32">
        <section className="container mx-auto px-6">
          <div class="w-full lg:flex items-center">
            {/* 
            w-full : Adds a width:100% style to the element
            lg:w-1/2 : sets 50% width for the element in larger devices 
            lg:pl-24 : Sets spacing between the two divs
            */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-md lg:text-2xl text-gray-600">Market intelligence Solutions to</h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-teal-600 mb-2 lg:mb-4">Win Your Market</h1>
              <p className="text-md lg:text-xl font-light text-gray-800 mb-8">Powerful analytics tools for your business. See the exact keywords for which your competitors rank in organic search and the amount of traffic driven by each of them.</p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-24">
              <form action="#" className="bg-gray-100 shadow-sm rounded-md p-8">
                <div className="mb-6">
                  <label for="name" className="mb-3 block text-gray-700">Full names:</label>
                  <input type="text" id="name" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Your Name" required/>
                </div>
                <div className="mb-6">
                  <label for="email" className="mb-3 block text-gray-700">Email Address:</label>
                  <input type="email" id="email" className="bg-white rounded-md border border-gray-200 p-3 focus:outline-none w-full" placeholder="Email Address" required/>
                </div>
                <button type="submit"className="py-3 px-12 bg-gray-500 hover:bg-gray-600 mr-5 rounded-md text-white text-lg focus:outline:none w-full">Submit</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
