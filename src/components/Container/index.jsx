
// eslint-disable-next-line react/prop-types
function Container({ children }){
  return(
    <section className="w-full min-h-screen flex flex-col justify-center items-center" >
      {children}
    </section>
  )
}

export default Container