export const APP_TITLE = 'WF Automation : Automatización de Procesos'
export const NV_BRAND_TITLE = 'WF Automation'
export const LISTA_SOLICITUDES = [

    {
        candidato: {
            candidatoNombre: 'Juan Carlos',
            candidatoApellido: 'Ramos Valdés',
            candidatoCel: '55 3553 8593',
            candidatoEmail: 'j.c.valdez@hotmail.com',
            candidatoDireccionCalle: 'Hidalgo',
            candidatoDireccionNoExt: '25',
            candidatoDireccionNoInt: 'B-105',
            candidatoDireccionCP: '04577',
            candidatoDireccionCol: 'Candelaria',
            candidatoDireccionMpio: 'Venustiano Carranza',
            candidatoDireccionEdo: 'CDMX'
        },
        solicitud: {
            id: 1,
            estatus: 1, // 0: Borrador - 1: En Logistica - 2: ESE Agendado - 3: ESE Ejecutado - 4: Terminada  |   0: Borrador - 1: Cancelada - 2: Rechazada - 3: Aceptada
            estatusDocsCandidato: '0', // 0: No cargados - 1: Cargados Parcial - 2: Completo | X: Validación de Documentos
            fechaCreacion: '2023-01-12 11:45', // Fecha en la que el ejecutivo de cuenta crea y envía la solicitud hacia logísitica
            fechaDocsCandidato: '', // Fecha en la que el candidato subió los docs
            solicitanteNombre: 'Gerardo González', // Ejecutivo de Cuenta que crea la solitud
            solicitanteCorreo: 'g.gonzalez@ford.mx',
            solicitanteCel: '55 3456 3434',
            agenteLogisticaNombre: 'Andrea Rocha', // Agente de Logistica que atiende la solicitud
            agenteLogisticaCel: '55 7349 2345',
            agenteLogisticaCorreo: 'andrea_rocha@gestionalo.com',
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

    },
    {
        candidato: {
            candidatoNombre: 'Carolina',
            candidatoApellido: 'Garcia Callejas',
            candidatoCel: '55 2134 3456',
            candidatoEmail: 'caro.garciac@gmail.com',
            candidatoDireccionCalle: 'Lirios',
            candidatoDireccionNoExt: '86',
            candidatoDireccionNoInt: '1',
            candidatoDireccionCP: '02985',
            candidatoDireccionCol: 'Echegaray',
            candidatoDireccionMpio: 'Naucalpan',
            candidatoDireccionEdo: 'Edo Mex'
        },
        solicitud: {
            id: 2,
            estatus: 2, // 0: Borrador - 1: En Logistica - 2: ESE Agendado - 3: ESE Ejecutado - 4: Terminada  |   0: Borrador - 1: Cancelada - 2: Rechazada - 3: Aceptada
            estatusDocsCandidato: '1', // 0: No cargados - 1: Cargados Parcial - 2: Completo
            fechaCreacion: '2023-01-18 18:22', // Fecha en la que el ejecutivo de cuenta crea y envía la solicitud hacia logísitica
            fechaDocsCandidato: '2023-01-24 14:03', // Fecha en la que el candidato subió los docs
            solicitanteNombre: 'Juan Eduardo Garza', // Ejecutivo de Cuenta que crea la solitud
            solicitanteCorreo: 'j.garza@ford.mx',
            solicitanteCel: '55 3456 3434',
            agenteLogisticaNombre: 'Andrea Rocha', // Agente de Logistica que atiende la solicitud
            agenteLogisticaCel: '55 7349 2345',
            agenteLogisticaCorreo: 'andrea_rocha@gestionalo.com',
            fechaESEAgendado: '2023-01-19', // Fecha en la se agendó el ESE
            fechaHrESEAgendado: '09:32',
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

    }

]
export const SOLICITUD_ESTATUS_CLR_LBL = [
    {id: 0, color: '#3c6382', colorTxt: 'white', label: 'Borrador'},
    {id: 1, color: '#F79F1F', colorTxt: 'black',  label: 'En Logística'},
    {id: 2, color: '#34ace0', colorTxt: 'white',  label: 'ESE Agendado'},
    {id: 3, color: '#3B3B98', colorTxt: 'white',  label: 'ESE Ejecutado'},
    {id: 4, color: '#009432', colorTxt: 'white',  label: 'Terminada'},
]

// 0: Borrador - 1: En Logistica - 2: ESE Agendado - 3: ESE Ejecutado - 4: Terminada
