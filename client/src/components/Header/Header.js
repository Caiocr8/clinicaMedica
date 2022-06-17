import React from "react";
import logo from "../../image/logo.png";

const Header = () => {
    return (
        <header className=" bg-teal-200 w-screen h-24 flex flex-row justify-around">
            <div className="flex items-center flex-row">
                <img className=" w-24" src={logo} />
                <h1 className=" text-4xl font-bold text-[#050505d7]">Clínica Medica</h1>
                <img className=" w-24" src={logo} />
            </div>
            <div>
            <nav class="">
                <div class="container flex flex-wrap justify-between items-center mx-auto">
                    <div class="hidden w-full md:block md:w-auto">
                    <ul class="flex flex-row mt-10 space-x-8 text-md font-bold">
                        <li>
                        <a href="/" class=" py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-700">Homepage</a>
                        </li>
                        <li>
                        <a href="/Consulta" class=" py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-700">Consultas</a>
                        </li>
                        <li>
                        <a href="/MarcarConsulta" class=" py-2 pr-4 pl-3 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 hover:text-blue-700">Marcar Consultas</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            </div>
        </header>
    );
}

export default Header;