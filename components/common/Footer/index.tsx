const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="flex flex-col md:flex-row items-center justify-center border-t border-primary/50 py-10 md:py-14 lg:py-16 shadow-md">
            <p className="font-mono font-semibold text-sm md:text-base">©{year} Cinemart</p>
            <p className="hidden md:flex font-mono text-sm md:mx-10 md:text-base">|</p>
            <p className="font-mono font-semibold text-sm md:text-base">by dialkq</p>
        </div>
    )
}

export default Footer