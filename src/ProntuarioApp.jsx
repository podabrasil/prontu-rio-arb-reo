
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
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-green-800 mb-6">Prontuário Técnico de Árvores</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Seção: Probabilidade de Falhas */}
        <h2 className="col-span-full text-lg font-semibold mt-4">13. Probabilidade de Falhas</h2>
        {["Copa", "Galhos", "Tronco", "Raízes"].map((parte, i) => (
          <div key={i} className="col-span-full">
            <label className="block font-semibold mb-1">{parte}</label>
            {["Improvável", "Possível", "Provável", "Iminente"].map((nivel, j) => (
              <label key={j} className="mr-4">
                <input
                  type="radio"
                  name={`falha_${parte.toLowerCase()}`}
                  value={nivel}
                  onChange={handleChange}
                /> {nivel}
              </label>
            ))}
          </div>
        ))}

        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded col-span-full mt-4">
          Salvar Registro
        </button>
      </form>
    </div>
  );
}
