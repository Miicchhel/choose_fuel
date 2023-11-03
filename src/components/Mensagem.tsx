import { InfoProps } from "../interfaces/interfaces";

interface MensagemProps {
  info: InfoProps | undefined;
}

export default function Mensagem({ info }: MensagemProps) {
  return (
    <>
      {info && Object.keys(info).length > 0 && (
        <section className="result">
          <h2 className="result-title">{info.title}</h2>

          <span>Álcool {info.infoEtanol}</span>
          <span>Gasolina {info.infoGasolina}</span>
        </section>
      )}
    </>
  );
}
