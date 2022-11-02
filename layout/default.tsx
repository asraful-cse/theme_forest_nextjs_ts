import Navbar from "../components/Navbar";

const Default = ({ children }: { children: any }) => {
    return (
        <section className="font-thin">
            <Navbar.Primary />
            {children}
        </section>
    );
};

export default Default;
