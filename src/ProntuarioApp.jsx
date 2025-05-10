
import { useState } from "react";

export default function ProntuarioApp() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", form);
    alert("Registro salvo com sucesso!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto text-sm space-y-6">
      <h1 className="text-2xl font-bold text-green-800 mb-4">📋 Prontuário Técnico de Árvores</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* 1. Identificação */}
        <h2 className="col-span-full text-lg font-semibold mt-4">1. Identificação</h2>
        <input name="cliente" placeholder="Cliente" className="border p-2" onChange={handleChange} />
        <input name="localizacao" placeholder="Localização" className="border p-2" onChange={handleChange} />
        <input name="numeroLaudo" placeholder="Nº do laudo" className="border p-2" onChange={handleChange} />
        <input name="data" type="date" className="border p-2" onChange={handleChange} />
        <input name="especie" placeholder="Espécie" className="border p-2" onChange={handleChange} />
        <input name="codigoArvore" placeholder="Código da árvore" className="border p-2" onChange={handleChange} />

        {/* 2. Características Físicas */}
        <h2 className="col-span-full text-lg font-semibold mt-4">2. Características Físicas</h2>
        <input name="altura" placeholder="Altura (m)" className="border p-2" onChange={handleChange} />
        <input name="dap" placeholder="DAP (cm)" className="border p-2" onChange={handleChange} />
        <input name="copa" placeholder="Diâmetro da copa (m)" className="border p-2" onChange={handleChange} />
        <select name="vigor" className="border p-2" onChange={handleChange}>
          <option value="">Vigor vegetativo</option>
          <option value="Alto">Alto</option>
          <option value="Médio">Médio</option>
          <option value="Baixo">Baixo</option>
        </select>
        <select name="porte" className="border p-2" onChange={handleChange}>
          <option value="">Porte arbóreo</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Amplo">Amplo</option>
        </select>
        <select name="densidade" className="border p-2" onChange={handleChange}>
          <option value="">Densidade da copa</option>
          <option value="Rala">Rala</option>
          <option value="Normal">Normal</option>
          <option value="Densa">Densa</option>
        </select>
        <select name="ramos" className="border p-2" onChange={handleChange}>
          <option value="">Ramos interiores</option>
          <option value="Poucos">Poucos</option>
          <option value="Normal">Normal</option>
          <option value="Muitos">Muitos</option>
        </select>
        <select name="epifitas" className="border p-2" onChange={handleChange}>
          <option value="">Epífitas</option>
          <option value="Nenhuma">Nenhuma</option>
          <option value="Poucas">Poucas</option>
          <option value="Muitas">Muitas</option>
        </select>

        {/* 3. Avaliação Visual */}
        <h2 className="col-span-full text-lg font-semibold mt-4">3. Avaliação Visual</h2>
        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Defeitos de copa e galhos</legend>
          {["Copa desequilibrada", "Galhos mortos", "Galhos quebrados", "Galhos estendidos", "Rachaduras", "Danos por raio", "Condominância", "Casca inclusa", "Junção frágil", "Cavidade/Ninho", "Falhas de ramos inferiores", "Ramos semelhantes presentes", "Cancro/Galha/Tumor", "Dano/deterioração do alburno", "Fungo/Cogumelo", "Deterioração do cerne", "Madeira de reação"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
        </fieldset>

        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Defeitos de tronco</legend>
          {["Casca morta", "Ramos condominantes", "Inclinação", "Textura ou cor anormal da casca", "Casca inclusa", "Rachaduras", "Cancro/Galha/Tumor", "Exsudação de seiva"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
        </fieldset>

        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Defeitos de raízes</legend>
          {["Colo soterrado/não visível", "Anilhamento de caule", "Raiz morta", "Deterioração", "Cogumelo/Fungo", "Exsudação de seiva", "Cavidade", "Rachaduras", "Raízes cortadas/danificadas", "Levantamento de raiz"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
        </fieldset>

        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Condição do solo</legend>
          {["Volume limitado", "Saturado", "Raso", "Compactado", "Pavimentação sob raiz"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
          <input name="soloOutro" placeholder="Outro (solo)" className="border p-2 mt-2 w-full" onChange={handleChange} />
          <input name="phSolo" placeholder="pH do solo" className="border p-2 mt-2 w-full" onChange={handleChange} />
        </fieldset>

        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Avaliação do local</legend>
          {["Ventos fortes", "Calor intenso", "Chuvas fortes", "Protegido", "Parcial", "Cheio", "Afunilamento do vento"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
          <input name="localOutro" placeholder="Outro (local)" className="border p-2 mt-2 w-full" onChange={handleChange} />
          <input name="clima" placeholder="Clima predominante" className="border p-2 mt-2 w-full" onChange={handleChange} />
        </fieldset>

        <fieldset className="col-span-full border p-2 rounded">
          <legend className="font-semibold">Podas irregulares</legend>
          {["Nenhuma", "Destopo", "Rabo de leão", "Lesões de poda"].map((item, i) => (
            <label key={i} className="block"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
          ))}
        </fieldset>

        {/* 4. Tratamento */}
        <h2 className="col-span-full text-lg font-semibold mt-4">4. Tratamento Nutricional / Fitossanitário</h2>
        {["Nutricional", "Fitossanitário", "Poda", "Transplante"].map((item, i) => (
          <label key={i} className="block col-span-1"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
        ))}
        <input name="produto" placeholder="Produto aplicado" className="border p-2" onChange={handleChange} />
        <input name="dose" placeholder="Dose" className="border p-2" onChange={handleChange} />
        <input name="modoAplicacao" placeholder="Modo de aplicação" className="border p-2" onChange={handleChange} />
        <input name="frequencia" placeholder="Frequência / Repetição" className="border p-2" onChange={handleChange} />
        <input name="dataAplicacao" type="date" className="border p-2" onChange={handleChange} />

        {/* 5. Recomendações */}
        <h2 className="col-span-full text-lg font-semibold mt-4">5. Recomendações Técnicas</h2>
        {["Manutenção de rotina", "Nova avaliação em 6 meses", "Remoção necessária", "Monitoramento quinzenal"].map((item, i) => (
          <label key={i} className="block col-span-1"><input type="checkbox" name={item} onChange={handleChange} /> {item}</label>
        ))}
        <textarea name="observacoesFinais" placeholder="Observações finais" className="border p-2 col-span-full" rows="3" onChange={handleChange}></textarea>

        <button type="submit" className="bg-green-700 text-white font-semibold px-4 py-2 rounded col-span-full mt-4">Salvar Registro</button>
      </form>
    </div>
  );
}
