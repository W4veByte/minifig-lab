import { createSignal } from "solid-js";

const Sidebar = () => {
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 bg-yellow-500 text-white px-4 py-2 rounded-lg md:hidden"
        onClick={() => setIsOpen(!isOpen())}
      >
        {isOpen() ? "Close Menu" : "Open Menu"}
      </button>
      <aside
        className={`fixed md:static inset-y-0 left-0 transform ${isOpen() ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out w-80 md:w-full bg-yellow-400 z-40`}
        aria-label="Sidebar"
      >
        <div className="h-full px-6 mt-8 overflow-y-auto">
          <div className="text-gray-900 flex flex-col items-center">
            <h2 className="font-baloo text-5xl">Minifig Lab</h2>
            <p className="text-sm">This is the sidebar</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
