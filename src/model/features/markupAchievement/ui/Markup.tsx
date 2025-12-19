import { Navbar } from "./Navbar/Navbar";
import { MainSection } from "./sections/MainSection/MainSection";
import { Rates } from "./sections/Rates/Rates";

export const Markup = () => {
    return (
        <section>
            <Navbar/>     
            <MainSection/> 
            <Rates/>                  
        </section>
    );
};