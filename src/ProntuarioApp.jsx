
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
    alert("Registro salvo!");
  };

  return (
    <div className="p-4 max-w-6xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Prontuário Técnico Completo</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="cliente" placeholder="Cliente" className="border p-2" onChange={handleChange} />
        <input name="localizacao" placeholder="Localização" className="border p-2" onChange={handleChange} />
        <input name="especie" placeholder="Espécie" className="border p-2" onChange={handleChange} />
        <input name="altura" placeholder="Altura (m)" className="border p-2" onChange={handleChange} />
        <input name="dap" placeholder="DAP (cm)" className="border p-2" onChange={handleChange} />
        <input name="copa" placeholder="Diâmetro da copa (m)" className="border p-2" onChange={handleChange} />
        <select name="vigor" className="border p-2" onChange={handleChange}>
          <option value="">Vigor</option>
          <option value="Alto">Alto</option>
          <option value="Médio">Médio</option>
          <option value="Baixo">Baixo</option>
        </select>
        <select name="porte" className="border p-2" onChange={handleChange}>
          <option value="">Porte Arbóreo</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Amplo">Amplo</option>
        </select>
        <select name="densidadeCopa" className="border p-2" onChange={handleChange}>
          <option value="">Densidade da Copa</option>
          <option value="Rala">Rala</option>
          <option value="Normal">Normal</option>
          <option value="Densa">Densa</option>
        </select>
        <select name="ramosInteriores" className="border p-2" onChange={handleChange}>
          <option value="">Ramos Interiores</option>
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
        <textarea name="observacoes" placeholder="Observações" className="border p-2 col-span-full" rows={4} onChange={handleChange}></textarea>
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded col-span-full">Salvar Registro</button>
      </form>
    </div>
  );
}
