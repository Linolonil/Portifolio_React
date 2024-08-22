
// eslint-disable-next-line react/prop-types
function Container({ children }){
  return(
    <section className="w-full min-h-screen flex flex-col justify-center items-center  " style={{backgroundColor: 'var(--body-color)'}}>
      {children}
    </section>
  )
}

export default Container