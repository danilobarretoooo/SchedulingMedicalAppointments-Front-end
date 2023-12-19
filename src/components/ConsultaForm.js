import React, {useEffect, useState} from 'react';
import axios from 'axios';


const ConsultaForm = () => {
    const [consulta, setConsulta] = useState({
        dataConsulta: '',
        medicoId: '',
        pacienteId: '',
    });

    function setConsultas(data) {
        return undefined;
    }

    useEffect(() => {
        console.log('ConsultaList renderizado');
        axios.get('http://localhost:8080/api/consultas')
            .then(response => setConsultas(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleChange = (e) => {
        setConsulta({ ...consulta, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/api/consultas/agendar', consulta)
            .then(response => console.log(response))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h2>Agendar Consulta</h2>
            <form onSubmit={handleSubmit}>
                <label>Data da Consulta:</label>
                <input type="datetime-local" name="dataConsulta" onChange={handleChange} required />

                <label>Médico ID:</label>
                <input type="number" name="medicoId" onChange={handleChange} required />

                <label>Paciente ID:</label>
                <input type="number" name="pacienteId" onChange={handleChange} required />

                <button type="submit">Agendar</button>
            </form>
        </div>
    );
};

export default ConsultaForm;
