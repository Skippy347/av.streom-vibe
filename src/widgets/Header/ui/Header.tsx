import React from "react";
import "./Header.scss";
import { Logo } from "@/shared/ui/Logo/Logo";

export const Header = (): React.JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo" />
      </div>
    </header>
  );
};
