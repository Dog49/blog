import "./components/navgation.js"
import Navigation from "./components/navgation"
import PersonalIntroduction from "./components/PersonalIntroduction"


export default function Page() {
    return (
        <main>
            <Navigation />
            <div>

                {/* eslint-disable-next-line @next/next/no-img-element */}

            <PersonalIntroduction />

            </div>

        </main>

    )
}