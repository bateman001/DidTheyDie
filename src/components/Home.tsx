import { useState, useContext, useEffect } from "react";
import { SearchedContext } from "../context/SearchedContext";
import { DisplayCharacterDeath } from "./DisplayCharacterDeath";
import { Search } from "./Search";

export interface ReturnData {
    aliases: [string];
    allegiances: [string];
    books: [string];
    born: string;
    culture: string;
    died: string;
    father: string;
    gender: "Male" | "Female";
    mother: string;
    name: string;
    playedBy: [string];
    povBooks: [string];
    spouse: string;
    titles: [string];
    tvSeries: [string];
    url: string;
}

export type ReturnDataType = ReturnData[] | [];

export const Home = () => {
    // Variables
    const url = `https://anapioficeandfire.com/api/characters?name=`;

    // Context
    const context = useContext(SearchedContext);

    // States
    const [character, setCharacter] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [characterData, setCharacterData] = useState<ReturnDataType>([]);

    // useEffect
    useEffect(() => {
        if (!context.searched) {
            resetCharacterData();
        }
    }, [context.searched]);

    // Functions
    const search = async (): Promise<ReturnData[]> => {
        const searchUrl = url + character;

        const res = await fetch(searchUrl);
        const data: ReturnData[] = await res.json();

        return data;
    };

    const SearchCharacter = async () => {
        setSubmitting(true);
        context.changeSearched(true);
        let data = await search();

        setCharacterData(data);
        setSubmitting(false);
    };

    const resetCharacterData = () => {
        setCharacter("");
        setCharacterData([]);
    };
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ flex: 0.3 }}>
                <h1>did {!!character ? character : `they`} die?</h1>
                <Search update={character} updateSearch={setCharacter} search={SearchCharacter} />
            </div>

            <DisplayCharacterDeath character={characterData} searching={submitting} />
        </div>
    );
};
