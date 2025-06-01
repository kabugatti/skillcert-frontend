import ChangePasswordForm from "@/components/ChangePasswordForm";
import SidebarSettings from "../components/sidebarSettings";









export default function Page() {
    return (
        <div className="bg-[#111827] w-full flex items-start gap-10 h-screen px-8 py-6  "  >
          <SidebarSettings/>
          <ChangePasswordForm/>
        </div>
    )
}