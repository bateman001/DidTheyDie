import { useState } from "react";
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

    // States
    const [character, setCharacter] = useState<string>("");
    const [submitting, setSubmitting] = useState<boolean>(false);
    const [characterData, setCharacterData] = useState<ReturnDataType>([]);
    const [startedSearch, setStartedSearching] = useState<boolean>(false);

    // Functions
    const search = async (): Promise<ReturnData[]> => {
        const searchUrl = url + character;

        const res = await fetch(searchUrl);
        const data: ReturnData[] = await res.json();

        return data;
    };

    const SearchCharacter = async () => {
        setSubmitting(true);
        setStartedSearching(true);
        let data = await search();

        setCharacterData(data);
        setSubmitting(false);
    };

    return (
        <div>
            <h1>did {!!character ? character : `they`} die?</h1>
            <Search update={character} updateSearch={setCharacter} search={SearchCharacter} />
            <DisplayCharacterDeath character={characterData} searching={submitting} hasSearched={startedSearch} />
        </div>
    );
};
