import { Outlet } from "react-router"
import NavBar from "./NavBar"

function AppLayout() {
    return (
        <div>
            <NavBar />
            <div>
                <main>
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

export default AppLayout
