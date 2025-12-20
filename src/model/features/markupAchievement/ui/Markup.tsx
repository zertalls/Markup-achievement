import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar/Navbar";
import { CreateAccount } from "./sections/CreateAcount/CreateAccount";
import { MainSection } from "./sections/MainSection/MainSection";
import { Rates } from "./sections/Rates/Rates";

export const Markup = () => {
    return (
        <section>
            <Navbar/>     
            <MainSection/> 
            <Rates/>  
            <CreateAccount/>  
            <Footer/>              
        </section>
    );
};