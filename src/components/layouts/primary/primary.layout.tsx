import { FC, PropsWithChildren } from "react";
import PrimaryLayoutHeader from "./header/header";

const PrimaryLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <PrimaryLayoutHeader />
            <main>{children}</main>
            <footer></footer>
        </>
    );
};

export default PrimaryLayout;
