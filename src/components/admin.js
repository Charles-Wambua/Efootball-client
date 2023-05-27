import FixtureGenerator from "../pages/generateFixtures"
import "./css/admin.css"
export const Admin = () => {
    return <div className="admin">
        <h3>Admin page</h3>
        <div>
            <FixtureGenerator/>
        </div>
        
    </div>
}