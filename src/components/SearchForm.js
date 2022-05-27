import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const searchValue = useRef("");
  const { setSearchTerm } = useGlobalContext();
  const searchCocktail = ()=>{
    setSearchTerm(searchValue.current.value)
  }
  React.useEffect(()=>{
    searchValue.current.focus()
  }, [])
  return (
    <section className="section search">
      <form action="" className="search-form">
        <div className="form-control">
          <label htmlFor="name">search your favorite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
            onSubmit={((e)=>{e.preventDefault()})}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
