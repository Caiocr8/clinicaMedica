import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Axios from 'axios';

const Consulta = () => {

    const [consultasList, setConsultasList] = useState([]);

    const getConsultas = () => {
        Axios.get('http://localhost:3001/consultas', ).then((response) => {
            setConsultasList(response.data);
        });
    }

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            <div className=" flex justify-center mt-5">
                <button
                    onClick={getConsultas}
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >Mostrar Consultas
                </button>
            </div>
            <div className="mt-5">
                {consultasList.map((val,key) => {
                    return(
                        <div className="flex p-5 w-screen bg-slate-50">
                           <div> 
                           <strong>Nome:</strong> {val.nome}
                            </div>
                            <div className=" ml-6"> 
                                <strong>Idade:</strong> {val.idade}
                            </div>
                            <div className=" ml-6">
                                <strong>CPF:</strong> {val.cpf}
                            </div>
                            <div className=" ml-6">
                                <strong>Data:</strong> {val.data}
                            </div>    
                            <div className=" ml-6">
                                <strong>Tratamento:</strong> {val.tratamento}
                            </div>    
                        </div>
                    );
                })}
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
}

export default Consulta;