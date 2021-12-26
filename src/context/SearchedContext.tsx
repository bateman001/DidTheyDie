import React, { useState } from "react";

interface SearchContextValues {
    searched: boolean;
    changeSearched: (change: boolean) => void;
}

export const SearchedContext = React.createContext({} as SearchContextValues);

export const Searched = (props: any) => {
    const [searched, setsearched] = useState<boolean>(false);

    const changeSearched = (change: boolean) => {
        setsearched(change);
    };

    const values: SearchContextValues = {
        searched,
        changeSearched
    };

    return <SearchedContext.Provider value={values}>{props.children}</SearchedContext.Provider>;
};
