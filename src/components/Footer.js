export default function Footer() {
    const fullYear = new Date().getFullYear();
    return (
        <footer>
            Copyright &copy; {fullYear}
        </footer>
    )
}
