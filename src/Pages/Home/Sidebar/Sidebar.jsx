import SidebarRoutes from "../../../components/shared/SidebarRoutes/SidebarRoutes";

const Sidebar = () => {
    return (
        <div className="">
            {/* logo */}
            <div className="my-12 flex gap-2 items-center justify-center">
              <img src="/therapy.png" alt="" className="hidden md:block md:w-10" />
              <h2 className="text-blue-500 text-2xl md:text-2xl">Scopioe Cure</h2>
            </div>
            {/* sidebar route */}
            <SidebarRoutes />
        </div>
    );
};

export default Sidebar;