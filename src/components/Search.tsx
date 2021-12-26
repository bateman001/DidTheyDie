import { KeyboardEventHandler, useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
    updateSearch: (update: string) => void;
    update: string;
    search: () => void;
}

export const Search = (props: SearchProps) => {
    // Variables
    const { updateSearch, update, search } = props;

    // States
    const [hover, setHover] = useState<boolean>(false);

    // Functions
    const capitalizeSearch = (text: string) => {
        if (text) {
            return text
                .split(" ")
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(" ");
        } else return "";
    };

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: 10
                // border: "1px solid white"
            }}
        >
            <input
                type="text"
                placeholder="Search Characters..."
                value={update}
                style={{
                    width: "70%",
                    height: 40,
                    borderRadius: "30px",
                    padding: 10,
                    fontSize: "20px",
                    color: "white"
                }}
                onChange={e => updateSearch(capitalizeSearch(e.target.value))}
                onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
                    if (e.code === "Enter") {
                        search();
                    }
                }}
            ></input>
            <button
                type="submit"
                style={{
                    backgroundColor: "transparent",
                    color: hover ? "white" : "#2A2A2A",
                    border: "none",
                    cursor: "pointer"
                }}
                onClick={() => search()}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <FaSearch size={30} />
            </button>
        </nav>
    );
};
