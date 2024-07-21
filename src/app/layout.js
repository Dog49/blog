import "./globals.css";


export const metadata = {
    title: "Dog49",
    description: "Dog49",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}