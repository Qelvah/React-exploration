import { Routes, Route, Navigate } from "react-router-dom";
import { pages } from "../config/pageMap";
import "./Content.css";

export default function Content({ id }: { id?: string }) {
  return (
    <div id={id}>
      <Routes>
        {pages.map((p) => (
          <Route key={p.path} path={p.path} element={<p.component />} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}
