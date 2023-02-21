import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Logistica() {
    return (
        <div>
            <h4>Logística</h4>
            <hr />
            <FullCalendar
                plugins={[ dayGridPlugin ]}
                locale='es'
                initialView="dayGridMonth"
                weekends={true}
                events={[
                    { title: 'ESE - Juan Carlos Ramos', date: '2023-02-09T09:15:00', color: 'red', textColor: 'white' },
                    { title: 'ESE - Carolina Garcia', date: '2023-02-14T14:45:00', color: 'red', textColor: '#b71540' }
                ]}
            />
        </div>

    )
}

export default Logistica