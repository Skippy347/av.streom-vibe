import React from "react";
import classNames from "classnames";
import logo from "@/shared/assets/images/logo.svg";

import "./Logo.scss";

type LoadingType = "eager" | "lazy";

interface LogoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title?: string;
  loading?: LoadingType;

  className?: string;
}

export const Logo = (props: LogoProps): React.JSX.Element => {
  const { className, title, loading, ...otherProps } = props;

  return (
    <a className={classNames(className, "logo")} href="/" title={title} aria-label={title} {...otherProps}>
      <img className="logo__image" src={logo} alt="" height={60} width={199} loading={loading} />
    </a>
  );
};
