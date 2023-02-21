import { useState, useEffect } from 'react'
import { APP_TITLE, NV_BRAND_TITLE, LISTA_SOLICITUDES, SOLICITUD_ESTATUS_CLR_LBL } from "./utils/const-app"
import Navbar from "./components/Navbar/Navbar"
import SolicitudesPanel from "./components/SolicitudesPanel/SolicitudesPanel"
import Logistica from "./components/Logistica.jsx/Logistica"

function App() {
  const x = true
  const [ componenteMostrar, setComponenteMostrar ] = useState('Solicitudes')
  const [ agregaSolicitud, setAgregaSolicitud ] = useState(false)

  const seleccionaComponente = (c) => {

    setComponenteMostrar(c)

  }

  const agregaSolicitudFn = () => {

    setAgregaSolicitud(true)

  }

  return (
    <div>

      {/* (1) Si está loggeado, muestro este */}
      {true &&
        <div>
          <Navbar nmdEntity='Talenti' nmdAppTitle={APP_TITLE} nmdNBBrandTitle={NV_BRAND_TITLE} seleccionComponente={seleccionaComponente} agregaSolFn={agregaSolicitudFn} />
        </div>
      }

    {componenteMostrar === 'Solicitudes' && 
      (
        <div className="ms-3 me-3" style={{marginTop: '5rem'}}>
          <SolicitudesPanel solicitudes={LISTA_SOLICITUDES} solicitudesEstatusLbl={SOLICITUD_ESTATUS_CLR_LBL} agregaSolicitud={agregaSolicitud} />
        </div>
      )
    }

    {componenteMostrar === 'Logistica' && <div className="ms-3 me-3" style={{marginTop: '5rem'}}><Logistica /></div>}

      {/* (2) Si NO está loggeado, muestro este */}
      {!x &&
        <div className="ms-2 mt-2">
          Not logged
        </div>
      }

    </div>
  )
}

export default App
