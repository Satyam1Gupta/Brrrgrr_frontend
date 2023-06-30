
  export default function Example() {
    return (
     <div>
     <div id="team" className="flex my-28 m-9 items-center justify-center text-center bg-gradient-to-r from-fuchsia-500 via-red-600 to-cyan-400 ">
        <div className="flex flex-col items-center justify-center rounded-tr-full rounded-bl-full w-full bg-white">
          <div className="flex flex-col p-2 m-2 w-full">
            <div className="text-xl md:text-3xl font-medium">Our Team</div>
  
            <div
              className="flex items-center justify-center md:flex-row flex-col space-x-4 space-y-4 p-2"
            >
              <div
                className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
              >
                <div
                  className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="https://source.unsplash.com/300x300/?girl"
                    alt=""
                    className=""
                  />
                </div>
  
                <div
                  className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                >
                 Satyam Gupta
                </div>
                <div className="italic text-gray-500 text-sm">Full Stack Engineer</div>
               
              </div>
              <div
                className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
              >
                <div
                  className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="https://source.unsplash.com/300x300/?man,businessman"
                    alt=""
                    className=""
                  />
                </div>
  
                <div
                  className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                >
                  Shivam Gupta
                </div>
                <div className="italic text-gray-500 text-sm">Food manager</div>
                
              </div>
              <div
                className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
              >
                <div
                  className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="https://source.unsplash.com/300x300/?girl,woman"
                    alt=""
                    className=""
                  />
                </div>
  
                <div
                  className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                >
                 Sundram Gupta
                </div>
                <div className="italic text-gray-500 text-sm">Content Manager</div>
                
              </div>
              <div
                className="flex-col px-6 py-2 shadow-xl rounded-2xl hover:scale-105 w-[90%] md:w-1/4"
              >
                <div
                  className="h-40 w-40 border-2 border-cyan-500 rounded-full overflow-hidden bg-gray-200"
                >
                  <img
                    src="https://source.unsplash.com/300x300/?man,boy"
                    alt=""
                    className=""
                  />
                </div>
  
                <div
                  className="text-lg font-medium text-stone-600 cursor-pointer hover:text-stone-400"
                >
                 Kumar Vaibhav
                </div>
                <div className="italic text-gray-500 text-sm">Digital Marketing Expert</div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
     </div>
    )
  }