import { useState, useEffect, useRef, useContext } from "react";
import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { servicesData } from "@/sections/services/services.data";
import IsOpenContext from "@/libs/state/IsOpenContext"
import SearchPreview from "./searchPreview";
import styles from './search.module.scss';

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState<
    { icon: React.ReactElement; title: string; desc: string; link: string; color:string }[]
  >([]);
  const [suggestionsState, setSuggestionsState] = useState(false);
  const [isClicked, serIsClicked] = useState(false);
  const { isSearchOpen, setIsSearchOpen } = useContext(IsOpenContext);
  const [notFound, setNotFound] = useState(true);

  const handleChange = (e: any) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  //Handle minimize search click
  const handleClick = (e: any) => {
    serIsClicked(!isClicked);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const input = inputRef.current;
    const updateInput = () => {
      if (!input) return;
      if (input.clientHeight === 0) {
        setIsSearchOpen((prevIsOpen: boolean) => !prevIsOpen); 
      } else {
        setIsSearchOpen(false);
      }
    };
    updateInput();
    window.addEventListener("resize", updateInput);
  }, [isClicked, setIsSearchOpen]); 

  useEffect(() => {
    const filteredServices =
      searchValue.trim() === ""
        ? []
        : servicesData.filter((service) =>
            service.title.toLowerCase().includes(searchValue.toLowerCase())
          );

    setSuggestions(filteredServices);
    setSuggestionsState(filteredServices.length > 0);
  }, [searchValue]);

  useEffect(() => {
    const handleClick = (event: any) => {
      const id = event.target.id;
      if (id !== "searchPreview") setSuggestionsState(false);
      if (id !== "notFound") setNotFound(false);
      if (id === "search") {
        if (suggestions.length > 0) return setSuggestionsState(true);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [suggestions.length]);

  return (
    <div
      className={`${styles.search} ${isSearchOpen ? styles.open : ""}`}
    >
      <div className={styles.searchWrapper}>
        <input
          className={`${styles.searchInput} ${isSearchOpen ? styles.open : ""}`}
          placeholder="Search for a service..."
          type="text"
          name="navSearch"
          id="search"
          value={searchValue}
          onChange={handleChange}
          autoComplete="off"
          ref={inputRef}
        />
        <button
          className={styles.searchButton}
          onClick={handleClick}
        >
          <GoSearch className="text-white text-xl" />
        </button>
      </div>
      {suggestionsState && <SearchPreview suggestions={suggestions} />}
    </div>
  );
}
