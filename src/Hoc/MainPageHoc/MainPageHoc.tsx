import { Outlet } from "react-router-dom"
import Navigation from "../../components/Navigation/Navigation"

type Props = {}

const MainPageHoc = (props: Props) => {
    return (
        <>
            <Navigation />
            <Outlet context={"Hello"} />
        </>
    )
}

export default MainPageHoc