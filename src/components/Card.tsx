import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { SearchedContext } from "../context/SearchedContext";
interface CardProps {
    title?: string;
    subtite?: string;
}

export const Card = (props: CardProps) => {
    // Variables
    const { title, subtite } = props;

    // Context
    const context = useContext(SearchedContext);

    return (
        <div
            style={{
                border: "1px solid #2a2a2a",
                width: "30%",
                height: "30vh",
                backgroundColor: "#2a2a2a69",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <div
                style={{
                    flex: 0.1,
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 5
                }}
            >
                {context.searched && (
                    <div style={{ cursor: "pointer" }} onClick={() => context.changeSearched(false)}>
                        <FaTimes color={"white"} />
                    </div>
                )}
            </div>
            <div style={{ flex: 0.9, padding: 5 }}>
                <h2>{title}</h2>
                <p>{subtite}</p>
            </div>
        </div>
    );
};
