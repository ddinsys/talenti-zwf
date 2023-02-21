import { useState, useEffect } from 'react'
import { BG_NAVBAR, DEF_BG_IX } from '../../utils/const-navbar'
import './Navbar.scss'

function Navbar(props) {
    const { nmdEntity, nmdAppTitle, nmdNBBrandTitle, seleccionComponente, agregaSolFn } = props
    const [branName, setBrandName] = useState(nmdNBBrandTitle)

    useEffect(() => {

        let brnNm = ''

        if (nmdEntity) {
            brnNm = nmdEntity
            document.title = `${nmdEntity} - ${nmdAppTitle}`
        } else {
            brnNm = nmdNBBrandTitle
            document.title = nmdAppTitle
        }

        setBrandName(brnNm)

    }, [])

    const abreModalSolicitud = () => {

        const registroMdl = new bootstrap.Modal(document.getElementById("exampleModal"), {})
        registroMdl.show()
        
    }

    return (
        <div className='nmdNV'>

            <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: BG_NAVBAR[DEF_BG_IX].colorBG, color: BG_NAVBAR[DEF_BG_IX].colorTXT, boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}>
                <div className="container-fluid">

                    <a className="navbar-brand" href="#">
                        <img src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" className="d-inline-block align-text-top nmdNV__imgBrand" />
                        <span className="ms-2" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }}>{branName}</span>
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                                                {/* <a className="nav-link active" aria-current="page" href="#" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }} >Inicio</a> */}
                                <div className="nav-link" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT, cursor: 'pointer' }} onClick={() => {abreModalSolicitud(); return false}} >Crea Solicitud</div>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT, cursor: 'pointer' }} onClick={() => {seleccionComponente('Solicitudes'); return false}} >Solicitudes</div>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }} >Logística</a> */}
                                <div className="nav-link" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT, cursor: 'pointer' }} onClick={() => {seleccionComponente('Logistica'); return false}} >Logística</div>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }} >Candidatos</a> */}
                                <div className="nav-link" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT, cursor: 'pointer' }} onClick={() => {seleccionComponente('Candidato'); return false}} >Candidatos</div>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }} >Aplicador</a> */}
                                <div className="nav-link" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT, cursor: 'pointer' }} onClick={() => {seleccionComponente('Aplicador'); return false}} >Aplicadores</div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color: BG_NAVBAR[DEF_BG_IX].colorTXT }} >
                                    Procesos
                                </a>
                                <ul className="dropdown-menu">
                                    {/* <li><a className="dropdown-item" href="#">Inicio</a></li> */}
                                    <li><div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {abreModalSolicitud(); return false}} >Crea Solicitud</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {seleccionComponente('Solicitudes'); return false}} >Solicitudes</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {seleccionComponente('Logistica'); return false}} >Logística</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {seleccionComponente('Candidato'); return false}} >Candidatos</div></li>
                                    <li><div className="dropdown-item" style={{ cursor: 'pointer' }} onClick={() => {seleccionComponente('Aplicador'); return false}} >Aplicador</div></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span style={{fontWeight: 'bold', color: 'white'}}>{nmdAppTitle}</span>
                    </div>
                </div>
            </nav>
            <ModalSolicitud agregaSolFn={agregaSolFn} />
        </div>

    )
}

export default Navbar

function ModalSolicitud(props) {

    const { agregaSolFn } = props

    const enviaModalSolicitud = (t) => {

        const mdlSolicitudCerrar = document.getElementById('mdlSolicitudCerrar')
        mdlSolicitudCerrar.click()

        if (t === 1) {

            console.log('entra a enviar')
            agregaSolFn()

            Swal.fire({
                icon: 'success',
                title: 'Solicitud Enviada'
            })

            fetch("https://www.nomada.com.mx/apps/ctes/talenti/ci/Cxautomat/notificaWF/")
                .then((response) => response.json())  
                .then((xa) => console.log(xa));

            }

    }

    return(
        <div className="modal fade" tabIndex="-1" id="exampleModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                <div className="modal-header" style={{backgroundColor: 'rgb(69, 170, 242)', color: 'white', fontWeight: 'bold'}}>
                    <h5 className="modal-title"><i className="fa fa-file-text-o" aria-hidden="true"></i> Nueva Solicitud</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="row mb-3">
                            <label htmlFor="nmdMdlCandidatoEmpresa" className="col-sm-2 col-form-label">Empresa</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="nmdMdlCandidatoEmpresa" value={'Ford Motor Company'} disabled />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="nmdMdlCandidatoNombre" className="col-sm-2 col-form-label">Candidato</label>
                            <div className="col-sm-10">
                            <input type="text" className="form-control" id="nmdMdlCandidatoNombre" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="nmdMdlCandidatoCorreo" className="col-sm-2 col-form-label">Correo</label>
                            <div className="col-sm-10">
                            <input type="email" className="form-control" id="nmdMdlCandidatoCorreo" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" id='mdlSolicitudCerrar' className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => enviaModalSolicitud(0)} >Cerrar</button>
                    <button type="button" className="btn btn-primary" onClick={() => enviaModalSolicitud(1)}>Envía Solicitud</button>
                </div>
                </div>
            </div>
        </div>
    )

}