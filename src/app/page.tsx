
import Image from "next/image";
import { CoursesOverview } from "./coursesPage/coursesOverview";

import Footer from "../components/footer"
import { Navbar } from "../components/navbar"; 


export default function Page() {
  return (

    <div className="">
        <CoursesOverview />
      
      <h1>Welcome to SkillCert</h1>
      <Navbar variant="navbar1" />
      <Navbar variant="navbar2" />

      <Footer />
    </div>
  )
}
