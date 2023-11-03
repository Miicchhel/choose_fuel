import { ChangeEvent, FormEvent, useState } from "react"

interface InputsProps {
    gasolina: number;
    etanol: number;
}

interface InfoProps {
        title: string, 
        infoGasolina: number,
        infoEtanol: number
    }

export default function Formulario() {
    const [inputs, setInputs] = useState<InputsProps>({gasolina: 0, etanol: 0})
    const [info, setInfo] = useState<InfoProps>()

    function hundlerInput(event: ChangeEvent<HTMLInputElement>) {
        const {name, value} = event.target
        setInputs((prevInputs) => ({...prevInputs, [name]:Number(value)}))
    }

    function calcular(event: FormEvent){
        event.preventDefault()
        
        const {gasolina, etanol} = inputs
        const calculo = (etanol / gasolina)
        
        if (calculo <= 0.7) {
            setInfo(
                {
                    title: 'Compensa usar etanol', 
                    infoGasolina: inputs.gasolina,
                    infoEtanol: inputs.etanol
                }
            )
        } else {
            setInfo(
                {
                    title: 'Compensa usar gasolina', 
                    infoGasolina: inputs.gasolina,
                    infoEtanol: inputs.etanol
                }
            )
        }
    }

    return(
        <>
            <form className='form' onSubmit={calcular}>
                <label>R$ Gasolina/Litro</label>
                <input
                    type="number"
                    className="input"
                    placeholder="4,90"
                    min={1}
                    step={0.01}
                    required
                    name="gasolina"
                    value={inputs.gasolina}
                    onChange={hundlerInput}
                />

                <label>R$ Etanol/Litro</label>
                <input
                    type="number"
                    className="input"
                    placeholder="4,90"
                    min={1}
                    step={0.01}
                    required
                    name="etanol"
                    value={inputs.etanol}
                    onChange={hundlerInput}
                />
                <button type="submit">Calcular</button>
            </form>

        </>
    )
}