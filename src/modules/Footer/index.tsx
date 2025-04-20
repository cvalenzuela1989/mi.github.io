import { type FC } from "react";
import * as S from "./styled";
import { Logo } from "@components/Logo";
import { Container } from "@components/Container";

export const Footer: FC = () => {
    return (
        <footer className="py-12 md:py-16 shadow-2xl" data-animate>
            <Container>
                <S.FooterCols>
                    <div className="max-w-md">
                        <div className="mb-5">
                            <Logo />
                        </div>
                        <p className="text-secondary ">
                            Footer text goes here lorem ipsum dolor sit amet
                            risus, consectetur adipiscing elit Footer text goes
                            here lorem ipsum dolor sit amet risus, consect
                        </p>
                    </div>
                    <div>
                        <h6 className="text-secondary font-medium mb-4">
                            Policy
                        </h6>
                        <ul>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Terms of Service
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className="text-secondary font-medium mb-4">
                            Product Links
                        </h6>
                        <ul>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Link 1
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Link 2
                                </a>
                            </li>
                            <li className="mb-3">
                                <a
                                    href="/"
                                    className="text-tertiary  hover:text-secondary transition duration-150 ease-in-out"
                                >
                                    Link 3
                                </a>
                            </li>
                        </ul>
                    </div>
                </S.FooterCols>
                <div className="md:flex md:items-center md:justify-between">
                    <div className="text-secondary  text-sm mr-4">
                        &copy; insidemedia.com. All rights reserved.
                    </div>
                </div>
            </Container>
        </footer>
    );
};
