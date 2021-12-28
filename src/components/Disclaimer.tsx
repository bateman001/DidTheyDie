interface DisclaimerProps {
    closeDisclaimer: (arg0: boolean) => void;
}

export const Disclaimer = (props: DisclaimerProps) => {
    // Variables
    const { closeDisclaimer } = props;

    return (
        <div
            style={{
                border: "1px solid #D0CDCC",
                margin: 20,
                display: "flex",
                backgroundColor: "#D0CDCC",
                justifyContent: "space-around"
            }}
        >
            <div
                style={{
                    padding: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <p
                    style={{
                        color: "black"
                    }}
                >
                    DISCLAIMER: This API may consider characters who have died in the cinematic uniserse to be alive,
                    because GRR Martin has yet to finish writing the books. Seasons 6-8 is not entirely cannon (as it
                    should be).
                </p>
            </div>
            <div
                style={{
                    padding: 5,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <button style={{ padding: 5, cursor: "pointer" }} onClick={() => closeDisclaimer(false)}>
                    Accept
                </button>
            </div>
        </div>
    );
};
