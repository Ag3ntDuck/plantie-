import Header from "./ui/header/Header";
import Footer from "./ui/footer/Footer";
import type {ReactNode} from "react";
import '../shared/styles/assets/styles/main.css'
import './layout.css'
function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en" >
            <head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>plantie</title>
            </head>
                <body >
                <div className={'wrapper'}>
                    <Header/>
                     {children}
                    <Footer/>
                </div>
            </body>
        </html>

    )
}

export default RootLayout