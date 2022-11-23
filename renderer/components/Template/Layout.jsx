import Sidebar from "../Atoms/Sidebar";

export default function Layout({ children }) {
  return (
    <div className="app font-mono w-full min-h-screen flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
