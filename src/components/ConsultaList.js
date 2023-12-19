import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ConsultaList = () => {
    const [consultas, setConsultas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/consultas')
            .then(response => setConsultas(response.data))
            .catch(error => console.error(error));
    }, []);


    return (
        <div>
            <h2>Listar Consultas</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Data</th>
                    <th>Médico</th>
                    <th>Paciente</th>
                </tr>
                </thead>
                <tbody>
                {consultas.map(consulta => (
                    <tr key={consulta.id}>
                        <td>{consulta.id}</td>
                        <td>{consulta.dataConsulta}</td>
                        <td>{consulta.medico.nome}</td>
                        <td>{consulta.paciente.nome}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default ConsultaList;
