
import { useState } from "react";

export default function ProntuarioApp() {
  const [form, setForm] = useState({
    cliente: "",
    localizacao: "",
    laudo: "",
    data: "",
    especie: "",
    codigo: "",
    altura: "",
    dap: "",
    copa: "",
    vigor: "",
    porte: "",
    densidade: "",
    ramos: "",
    epifitas: "",
    // Os demais campos poderiam seguir aqui
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form enviado:", form);
    alert("Registro salvo!");
  };

  return (
    <div className="p-4 max-w-5xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold mb-4">Prontuário Técnico de Árvores</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Identificação */}
        <h2 className="col-span-full text-lg font-semibold mt-4">1. Identificação</h2>
        <input name="cliente" value={form.cliente} onChange={handleChange} placeholder="Cliente" className="border p-2" />
        <input name="localizacao" value={form.localizacao} onChange={handleChange} placeholder="Localização" className="border p-2" />
        <input name="laudo" value={form.laudo} onChange={handleChange} placeholder="Nº do Laudo" className="border p-2" />
        <input name="data" value={form.data} onChange={handleChange} type="date" className="border p-2" />
        <input name="especie" value={form.especie} onChange={handleChange} placeholder="Espécie" className="border p-2" />
        <input name="codigo" value={form.codigo} onChange={handleChange} placeholder="Código da Árvore" className="border p-2" />

        {/* Características Físicas */}
        <h2 className="col-span-full text-lg font-semibold mt-4">2. Características Físicas</h2>
        <input name="altura" value={form.altura} onChange={handleChange} placeholder="Altura (m)" className="border p-2" />
        <input name="dap" value={form.dap} onChange={handleChange} placeholder="DAP (cm)" className="border p-2" />
        <input name="copa" value={form.copa} onChange={handleChange} placeholder="Diâmetro da copa (m)" className="border p-2" />
        <select name="vigor" value={form.vigor} onChange={handleChange} className="border p-2">
          <option value="">Vigor Vegetativo</option>
          <option value="Alto">Alto</option>
          <option value="Médio">Médio</option>
          <option value="Baixo">Baixo</option>
        </select>
        <select name="porte" value={form.porte} onChange={handleChange} className="border p-2">
          <option value="">Porte Arbóreo</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Amplo">Amplo</option>
        </select>
        <select name="densidade" value={form.densidade} onChange={handleChange} className="border p-2">
          <option value="">Densidade da Copa</option>
          <option value="Rala">Rala</option>
          <option value="Normal">Normal</option>
          <option value="Densa">Densa</option>
        </select>
        <select name="ramos" value={form.ramos} onChange={handleChange} className="border p-2">
          <option value="">Ramos Interiores</option>
          <option value="Poucos">Poucos</option>
          <option value="Normal">Normal</option>
          <option value="Muitos">Muitos</option>
        </select>
        <select name="epifitas" value={form.epifitas} onChange={handleChange} className="border p-2">
          <option value="">Epífitas</option>
          <option value="Nenhuma">Nenhuma</option>
          <option value="Poucas">Poucas</option>
          <option value="Muitas">Muitas</option>
        </select>

        {/* Submissão */}
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded col-span-full mt-4">
          Salvar Registro
        </button>
      </form>
    </div>
  );
}
