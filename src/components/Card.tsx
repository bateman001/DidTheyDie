import React from "react";

interface CardProps {
    title?: string;
    subtite?: string;
}

export const Card = (props: CardProps) => {
    const { title, subtite } = props;

    return (
        <div
            style={{
                border: "1px solid #2a2a2a",
                width: "30%",
                height: "30vh",
                backgroundColor: "#2a2a2a69",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 10
            }}
        >
            <h2>{title}</h2>
            <p>{subtite}</p>
        </div>
    );
};
