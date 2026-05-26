import React, { useState } from 'react';

function Toggle() {
    const [activo, setActivo] = useState(false);

    return (
        <button onClick={() => setActivo(!activo)}>
            {activo ? 'Activo' : 'Inactivo'}
        </button>
    );
}

export default Toggle