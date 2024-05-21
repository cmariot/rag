import styles from "./page.module.css";


function Nav() {

    // Array of objects with the properties `href` and `text`
    const links = [
        { href: "/", text: "Home" },
        { href: "/chat", text: "Chat" },
    ];

    return (
        <nav className={styles.nav}>
            <ul>
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}


export default function Home() {
    return (
        <main className={styles.main}>
            <Nav />
            <h1>Home</h1>
        </main>
    );
}
