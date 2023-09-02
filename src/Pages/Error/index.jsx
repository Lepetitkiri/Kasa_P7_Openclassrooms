import React from "react";

{/*Components*/ }
import Header from '../../Components/Header/Index';
import ErrorComponent from '../../Components/Error/Index';
import Footer from '../../Components/Footer/Index';

function Error() {
    return (
        <>
            <Header />
            <main>
                <ErrorComponent />
            </main>
            <Footer />
        </>
    );
}

export default Error;