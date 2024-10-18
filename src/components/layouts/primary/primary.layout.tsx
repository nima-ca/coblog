import { FC, PropsWithChildren } from "react";
import PrimaryLayoutFooter from "./footer/footer";
import PrimaryLayoutHeader from "./header/header";

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <PrimaryLayoutHeader />
            <main>{children}</main>
            <PrimaryLayoutFooter />
        </>
    );
};

export default PrimaryLayout;
