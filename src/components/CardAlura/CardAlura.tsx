import React from "react"
import cardStyle from "./Card.module.css"

interface CardProps{
    children: React.ReactNode;
    headerTitle: string;
}
export default function Card(props:CardProps) {
    return (
        <div className={cardStyle.card}>
            <header className={cardStyle.cardHeader}>
                <h1 className={cardStyle.cardTitle}>{props.headerTitle}</h1>
            </header>
            <section className={cardStyle.cardBody}>
             {props.children}
            </section>
        </div>
    )
}