
const Footer = () => {
  return (
    

<footer className="bg-neutral-primary-soft text-white mt-10">
    <div className="mx-auto w-full max-w-7xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-2xl font-bold">
              ContactX
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Follow us</h2>
                  <ul className="text-body font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/gauravnagar-programmer/ContactManagement" target="_blank" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/nagar-gaurav/"  target="_blank" className="hover:underline">Linkdin</a>
                      </li>
                  </ul>
              </div>
              
          </div>
      </div>
      <hr className="my-6 border-default sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm  text-body sm:text-center">© 2026 . All Rights Reserved.
          </span>
          
      </div>
    </div>
</footer>

  )
}

export default Footer