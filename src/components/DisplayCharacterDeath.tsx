import { Card } from "./Card";
import { ReturnData, ReturnDataType } from "./Home";

interface DisplayCharacterDeathProps {
    character: ReturnDataType;
    searching: boolean;
    hasSearched: boolean;
}

export const DisplayCharacterDeath = (props: DisplayCharacterDeathProps) => {
    // Variables
    const { character, searching, hasSearched } = props;

    // Functions
    const initialMessage = () => {
        const title = "When you play the game of thrones, you win or you die.";
        const sub = "search for any character in the Game of Thrones Universe and find out";
        return <Card title={title} subtite={sub} />;
    };

    const noResult = () => {
        const title = "We have no idea who you are looking for!";
        const sub = "Search for someone who exists in the GOT universe instead";
        return <Card title={title} subtite={sub} />;
    };

    const characterDied = () => {
        const char = character[0];
        const gender = char.gender === "Male" ? "He" : "She";
        const title = `${char.name} is dead!`;
        const message = `Unfortunately ${char.name} is dead. They are out of the game. ${gender} died ${char.died}`;

        return <Card title={title} subtite={message} />;
    };

    const characterNotDead = () => {
        const char = character[0];
        const gender = char.gender === "Male" ? "He" : "She";
        const title = `${char.name} is alive!`;
        const message = `Oooof that was a close one! ${gender} is still in the game!`;

        return <Card title={title} subtite={message} />;
    };
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {character.length === 0 && !hasSearched && initialMessage()}
            {character.length === 0 && hasSearched && noResult()}
            {character.length > 0 && !!character[0].died && characterDied()}
            {character.length > 0 && !character[0].died && characterNotDead()}
        </div>
    );
};
