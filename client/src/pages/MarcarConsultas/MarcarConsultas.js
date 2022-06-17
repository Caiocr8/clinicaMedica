import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Axios from 'axios';


const MarcarConsulta = () => {
    const [consultasList, setConsultasList] = useState([]);

    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);
    const [cpf, setCpf] = useState('');
    const [data, setData] = useState('');
    const [tratamento, setTratamento] = useState('');

   const addConsulta = () => {
    window.location.href = "http://localhost:3000/Consulta";
    Axios.post('http://localhost:3001/create', {
        nome: nome,
        idade: idade,
        cpf: cpf,
        data: data,
        tratamento: tratamento 
    }).then(() => {
        setConsultasList([...consultasList, {
            nome: nome,
            idade: idade,
            cpf: cpf,
            data: data,
            tratamento: tratamento 
        }])
        
    });
   };

    return(
        <div>
            <div>
            <Header/>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col mt-10">
                    <h1 className="text-2xl flex justify-center font-bold text-[#050505d7]">MARCAR CONSULTA:</h1>
                    <div className="mb-3 xl:w-96">
                        <label>Nome:</label>
                        <input onChange={(event) => { setNome(event.target.value)}} placeholder="Nome:" className="form-control block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="text">

                        </input>
                    </div>
                    <div className="mb-3 mt-3 xl:w-96">
                        <label>CPF:</label>
                        <input onChange={(event) => { setCpf(event.target.value)}} placeholder="CPF:" className="form-control block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="text">

                        </input>
                    </div>
                    <div className="mb-3 mt-3 xl:w-96">
                        <label>Idade:</label>
                        <input onChange={(event) => { setIdade(event.target.value)}} placeholder="Idade:" className="form-control block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="number">

                        </input>
                    </div>
                    <div className="mb-3 mt-3 xl:w-96">
                        <label>Data do agendamento:</label>
                        <input onChange={(event) => { setData(event.target.value)}} placeholder="Data:" className="form-control block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="date">

                        </input>
                    </div>
                    <div className="mb-3 mt-3 xl:w-96">
                        <label>Tipo de Tratamento:</label>
                        <input onChange={(event) => { setTratamento(event.target.value)}} placeholder="Tipo de Tratamento:" className="form-control block w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none " type="text">

                        </input>
                    </div>
                    <div className="flex justify-center mb-3 mt-3">
                        <button
                            onClick={addConsulta}
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Enviar
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default MarcarConsulta;