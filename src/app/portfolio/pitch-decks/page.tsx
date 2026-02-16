import WorkNavbar from "@/app/components/WorkNavbar"

export default function PitchDecks() {
    return (
        <>
            <WorkNavbar current="pitch-decks"/>
            <h1 className="text-5xl items-center justify-center flex font-pt-serif">My Pitchdecks</h1>
            <div className="flex items-center justify-center">
                <iframe className="w-3/4 h-screen" src="https://www.canva.com/design/DAHA9XQwJpg/Ubhnjrs7mPfgl_CJjHGXoA/view?embed" allowFullScreen></iframe>
            </div>
        </>
    )
}