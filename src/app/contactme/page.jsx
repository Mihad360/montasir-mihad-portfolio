import Contactme from "../components/contactmepages/Contactme";

export const metadata = {
    title: "Mihad Portfolio | Contact Me",
    description: "Montasir Mihad Portfolio",
  };

const page = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <Contactme></Contactme>
            </div>
        </div>
    );
};

export default page;