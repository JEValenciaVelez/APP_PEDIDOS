
import Clients from "../../components/Clients"
import Employees from "../../components/Employees"
import { Layout } from "../../components/Layout"




export const Home = () => {


    return (
        <Layout>
          <h1>Home works</h1>
          {/* <Clients /> */}
          <Employees />
        </Layout>
    )
}