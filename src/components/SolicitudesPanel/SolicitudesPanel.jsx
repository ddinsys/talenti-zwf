import { useState, useEffect } from 'react'
import './SolicitudesPanel'

const solExtra = [{
    candidato: {
        candidatoNombre: 'Ana Lilia',
        candidatoApellido: 'Jimémenez Santandar',
        candidatoCel: '55 7345 5302',
        candidatoEmail: 'ana_jim@yahoo.com.mx',
        candidatoDireccionCalle: 'Astrónomos',
        candidatoDireccionNoExt: '62',
        candidatoDireccionNoInt: '14',
        candidatoDireccionCP: '03845',
        candidatoDireccionCol: 'Escandón',
        candidatoDireccionMpio: 'Benito Juárez',
        candidatoDireccionEdo: 'CDMX'
    },
    solicitud: {
        id: 3,
        estatus: 3, // 0: Borrador - 1: En Logistica - 2: ESE Agendado - 3: ESE Ejecutado - 4: Terminada  |   0: Borrador - 1: Cancelada - 2: Rechazada - 3: Aceptada
        estatusDocsCandidato: '0', // 0: No cargados - 1: Cargados Parcial - 2: Completo | X: Validación de Documentos
        fechaCreacion: '2023-01-04 17:21', // Fecha en la que el ejecutivo de cuenta crea y envía la solicitud hacia logísitica
        fechaDocsCandidato: '', // Fecha en la que el candidato subió los docs
        solicitanteNombre: 'Esthela Antúnez', // Ejecutivo de Cuenta que crea la solitud
        solicitanteCorreo: 'esthela_antunez@liverpool',
        solicitanteCel: '55 3456 3434',
        agenteLogisticaNombre: 'Luis Carlos Caso', // Agente de Logistica que atiende la solicitud
        agenteLogisticaCel: '55 7349 2345',
        agenteLogisticaCorreo: 'carlos_caso@gestionalo.com',
        fechaESEAgendado: '', // Fecha en la se agendó el ESE
        fechaHrESEAgendado: '',
        fechaESEEjecutado: '', // Fecha en la que en realidad se ejecutó el ESE
        fechaHrESEEjecutado: '', // Fecha en la que en realidad se ejecutó el ESE
        aplicadorESENombre: '', // Agente/Aplicador del ESE 
        aplicadorESECel: '',
        aplicadorESECorreo: '',
        analistaESENombre: '', // Analista del ESE 
        analistaESECel: '',
        analistaESECorreo: '',
        comentarios: [
            {
                usuario: '', // Persona que agrega el comentario
                rol: '', // Rol de la persona que agrega el comentario (Ejecutivo de Cuenta / Logística / Aplicador / Analista )
                comentario: '', // Comentario
                fecha: '' // Fecha en la que se ingresó el comentario
            }
        ]
    }

}]

function SolicitudesPanel(props) {

    const { solicitudes, solicitudesEstatusLbl, agregaSolicitud } = props
    const [ solAll, setSolAll ] = useState(solicitudes)

    const getClrStatus = (estatus) => {

        const defClr = solicitudesEstatusLbl.filter(e => estatus === e.id)
        return defClr

    }

    useEffect(() => {

        let arrPass
        if (agregaSolicitud) {
            arrPass = [...solicitudes, ...solExtra]
        } else {
            arrPass = [...solicitudes]
        }

        setSolAll(arrPass)

    }, [agregaSolicitud])

    return (
        <div>
            <h4>Solicitudes</h4>
            <hr />
            <table className="table table-hover table-sm">
                <thead>
                    <tr>
                        <th>Solicitud</th>
                        <th>Estatus</th>
                        <th>Candidato</th>
                        <th>Logística</th>
                        <th>Aplicador</th>
                        <th>Analista</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        solAll.map(s => {

                            const candidato = s.candidato
                            const solicitud = s.solicitud

                            const clrDef = getClrStatus(solicitud.estatus)

                            return(
                                <tr key={solicitud.id}>
                                    <td><small style={{fontSize: '.8rem'}}><b>{`ID: ${solicitud.id}`} </b><br />{solicitud.fechaCreacion}<br /><b>Ejecutivo:</b> {solicitud.solicitanteNombre}</small></td>
                                    <td><small style={{fontSize: '.8rem', color: clrDef[0].color, fontWeight: 'bold' }}>{clrDef[0].label}</small></td>
                                    <td><small style={{fontSize: '.8rem'}}><b>{candidato.candidatoNombre} {candidato.candidatoApellido}</b><br />{candidato.candidatoEmail}</small></td>
                                    <td><small style={{fontSize: '.8rem'}}><b>{solicitud.agenteLogisticaNombre ? solicitud.agenteLogisticaNombre : 'TBD'}</b><br />{solicitud.agenteLogisticaCorreo}</small></td>
                                    <td><small style={{fontSize: '.8rem'}}><b>{solicitud.aplicadorESENombre ? solicitud.aplicadorESENombre : 'TBD'}</b><br />{solicitud.aplicadorESECorreo}</small></td>
                                    <td><small style={{fontSize: '.8rem'}}><b>{solicitud.analistaESENombre ? solicitud.analistaESENombre : 'TBD'}</b><br />{solicitud.analistaESECorreo}</small></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default SolicitudesPanel
