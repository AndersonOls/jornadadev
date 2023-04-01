import React from 'react'
import "./videoFooter.css"

function VideoFooter() {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <h3>@anderson</h3>
                <p>Descrição do video</p>
                <div className='videoFooter__music'>
                    <p>Icone</p>
                    <p>Titulo da musica</p>
                </div>

            </div>
            <img
                className='videoFooter__record'
                alt='imagem vinil girando'
                src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png'
            />
        </div>
    )
}




export default VideoFooter