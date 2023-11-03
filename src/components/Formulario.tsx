export default function Formulario() {
    return(
        <div>
            <form className='form'>
                <label>R$ Gasolina/Litro</label>
                <input
                    type="number"
                    className="input"
                    placeholder="4,90"
                    min={1}
                    step={0.01}
                    required
                />

                <label>R$ Etanol/Litro</label>
                <input
                    type="number"
                    className="input"
                    placeholder="4,90"
                    min={1}
                    step={0.01}
                    required
                />
            </form>

            <button>Calcular</button>
        </div>
    )
}