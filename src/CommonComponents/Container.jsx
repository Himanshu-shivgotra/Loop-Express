// eslint-disable-next-line react/prop-types
function Container({ children , className }) {
    return (
      <div className={`max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-3 md:py-6 ${className}`}>
        {children}
      </div>
    );
  }
  
  export default Container;
  