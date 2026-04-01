import { ChartBarStacked, LayoutDashboard, LogOut, Settings, User2 } from "lucide-react"

export function Sidebar() {

    return <div className={`h-screen flex flex-col justify-between p-4 bg-primary w-64`}>
        <div className="py-2" >
            <div className="flex justify-between">
                <img className="w-12" src="https://companyasset.blob.core.windows.net/assets/zorvynlogolight.png" alt="" />
            </div>
            <div className="rounded-md overflow-hidden mt-8">
                {
                    menu.map((item) => {
                        return <div className={`flex items-center gap-3 px-3 py-2 hover:bg-slate-200 transition-all cursor-pointer bg-slate-300 text-sm`}>
                            {item.icon} {item.title}
                        </div>
                    })
                }
            </div>
        </div>

        <div className="flex flex-col rounded-md overflow-hidden">
            <button className="text-left flex gap-3 text-sm px-3 py-2 bg-slate-300 hover:bg-slate-200 cursor-pointer">
                <Settings className="h-5" /> Settings
            </button>
            <button className="text-left flex gap-3 text-sm px-3 py-2 bg-slate-300 hover:bg-slate-200 cursor-pointer">
                <LogOut className="h-5" /> Logout
            </button>
        </div>
    </div>
}


const menu = [
    {
        title: "Overview",
        icon: <LayoutDashboard className="h-5" />
    },
    {
        title: "Analytics",
        icon: <ChartBarStacked className="h-5" />
    },
    {
        title: "Account",
        icon: <User2 className="h-5" />
    },

]