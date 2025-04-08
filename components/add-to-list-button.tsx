"use client"
import { Game } from "@/interfaces/game";
import { useEffect, useState } from "react";

interface AddToListProps {
    game: Game;
}

export default function AddToListButton({ game }: AddToListProps) {
    const [isStored, setIsStored] = useState(false);

    useEffect(() => {
        const myStoredGameList = localStorage.getItem("myGameList");
        if (myStoredGameList) {
            const myGameList: Game[] = JSON.parse(myStoredGameList);
            setIsStored(myGameList.some((g) => g.id === game.id));
        }
    }, [game.id]);

    const handleAdd = () => {
        const myStoredGameList = localStorage.getItem("myGameList");
        const myGameList: Game[] = myStoredGameList ? JSON.parse(myStoredGameList) : [];

        if (!myGameList.some((g) => g.id === game.id)) {
            myGameList.push(game);
            localStorage.setItem("myGameList", JSON.stringify(myGameList));
            setIsStored(true);
        }
    };

    return (
        <button onClick={handleAdd} disabled={isStored}>
            {isStored ? "Added to list" : "Add to list"}
        </button>
    );
}
