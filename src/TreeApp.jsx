import { useState } from "react";

export default function TreeApp() {
  const [trees, setTrees] = useState([]);
  const [form, setForm] = useState({
    cliente: "",
    local: "",
    especie: "",
    altura: "",
    dap: "",
    copa: "",
    vigor: "",
    tratamento: "",
    produto: "",
    dose: "",
    modo: "",
    observacoes: "",
  });

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    setTrees([...trees, form]);
    setForm({
      cliente: "",
      local: "",
      especie: "",
      altura: "",
      dap: "",
      copa: "",
      vigor: "",
      tratamento: "",
      produto: "",
      dose: "",
      modo: "",
      observacoes: "",
    });
  };

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Cadastro de Árvores Urbanas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="Cliente" value={form.cliente} onChange={e => handleChange("cliente", e.target.value)} className="border p-2" />
        <input placeholder="Localização" value={form.local} onChange={e => handleChange("local", e.target.value)} className="border p-2" />
        <input placeholder="Espécie" value={form.especie} onChange={e => handleChange("especie", e.target.value)} className="border p-2" />
        <input placeholder="Altura (m)" value={form.altura} onChange={e => handleChange("altura", e.target.value)} className="border p-2" />
        <input placeholder="DAP (cm)" value={form.dap} onChange={e => handleChange("dap", e.target.value)} className="border p-2" />
        <input placeholder="Diâmetro da Copa (m)" value={form.copa} onChange={e => handleChange("copa", e.target.value)} className="border p-2" />
        <input placeholder="Vigor" value={form.vigor} onChange={e => handleChange("vigor", e.target.value)} className="border p-2" />
        <input placeholder="Tratamento" value={form.tratamento} onChange={e => handleChange("tratamento", e.target.value)} className="border p-2" />
        <input placeholder="Produto" value={form.produto} onChange={e => handleChange("produto", e.target.value)} className="border p-2" />
        <input placeholder="Dose" value={form.dose} onChange={e => handleChange("dose", e.target.value)} className="border p-2" />
        <input placeholder="Modo de aplicação" value={form.modo} onChange={e => handleChange("modo", e.target.value)} className="border p-2" />
        <textarea placeholder="Observações" value={form.observacoes} onChange={e => handleChange("observacoes", e.target.value)} className="border p-2 col-span-full" />

        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded col-span-full">Salvar Registro</button>
      </div>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Árvores Cadastradas</h2>
        {trees.map((tree, index) => (
          <div key={index} className="border p-4 rounded bg-gray-50">
            <p><strong>Cliente:</strong> {tree.cliente}</p>
            <p><strong>Local:</strong> {tree.local}</p>
            <p><strong>Espécie:</strong> {tree.especie}</p>
            <p><strong>Altura:</strong> {tree.altura} m | <strong>DAP:</strong> {tree.dap} cm | <strong>Copa:</strong> {tree.copa} m</p>
            <p><strong>Vigor:</strong> {tree.vigor}</p>
            <p><strong>Tratamento:</strong> {tree.tratamento}</p>
            <p><strong>Produto:</strong> {tree.produto} | <strong>Dose:</strong> {tree.dose} | <strong>Modo:</strong> {tree.modo}</p>
            <p><strong>Observações:</strong> {tree.observacoes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
