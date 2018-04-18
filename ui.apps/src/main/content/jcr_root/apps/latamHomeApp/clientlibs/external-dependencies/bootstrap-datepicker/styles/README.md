------------------------README-----------------------

El CSS de bootstrap-datepicker a sido modificado para que tenga estilos y colores del lineamiento LATAM.

Si se desea actualizar la versión de este CSS es necesario realizar los siguientes cambios:


datepicker table tr ... td.active[disabled] {
    background-color: #1b0088;
}

datepicker-switch, .datepicker .next, .datepicker .prev, .datepicker tfoot tr th {
    cursor: pointer;
    font-family: 'Latam-Sans-Regular', arial, sans-serif;
    color: #2D34CE;
    font-size: 16px;
}

Además se elimino el gradiente de color que se le da al día de la fecha seleccionada.