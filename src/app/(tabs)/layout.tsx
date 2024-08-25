import "98.css";
import NavLinks from "@/app/ui/nav-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="window" style={{ maxWidth: 700 }}>
      <div className="title-bar">
        <div className="title-bar-text">Roleplay game</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close"></button>
        </div>
      </div>
      <div className="window-body">
        <NavLinks />
        <div className="window" role="tabpanel">
          <div className="window-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
