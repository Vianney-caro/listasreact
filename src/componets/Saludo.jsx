import './Saludo.css'

function Saludo(){
    return(
        <>
            <p>Hola, mi nombre es Carolina</p>

            <button className='button'>Botón</button>

            <h1 className='text-3xl font-bold underline'>texto con tailwind</h1>

            <div className='"p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">'>
                <p>mi primera tarjeta con tailwind</p>
            </div>

        
        </>
    )
}

export default Saludo