
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";

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

      <Card>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          <Input placeholder="Cliente" value={form.cliente} onChange={e => handleChange("cliente", e.target.value)} />
          <Input placeholder="Localização" value={form.local} onChange={e => handleChange("local", e.target.value)} />
          <Input placeholder="Espécie" value={form.especie} onChange={e => handleChange("especie", e.target.value)} />
          <Input placeholder="Altura (m)" value={form.altura} onChange={e => handleChange("altura", e.target.value)} />
          <Input placeholder="DAP (cm)" value={form.dap} onChange={e => handleChange("dap", e.target.value)} />
          <Input placeholder="Diâmetro da Copa (m)" value={form.copa} onChange={e => handleChange("copa", e.target.value)} />

          <Select value={form.vigor} onValueChange={value => handleChange("vigor", value)}>
            <SelectTrigger>Vigor</SelectTrigger>
            <SelectContent>
              <SelectItem value="Baixo">Baixo</SelectItem>
              <SelectItem value="Normal">Normal</SelectItem>
              <SelectItem value="Alto">Alto</SelectItem>
            </SelectContent>
          </Select>

          <Select value={form.tratamento} onValueChange={value => handleChange("tratamento", value)}>
            <SelectTrigger>Tratamento</SelectTrigger>
            <SelectContent>
              <SelectItem value="Nutrição">Nutrição</SelectItem>
              <SelectItem value="Fitossanitário">Fitossanitário</SelectItem>
              <SelectItem value="Poda">Poda</SelectItem>
              <SelectItem value="Transplante">Transplante</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Produto" value={form.produto} onChange={e => handleChange("produto", e.target.value)} />
          <Input placeholder="Dose" value={form.dose} onChange={e => handleChange("dose", e.target.value)} />
          <Input placeholder="Modo de aplicação" value={form.modo} onChange={e => handleChange("modo", e.target.value)} />
          <Textarea placeholder="Observações" value={form.observacoes} onChange={e => handleChange("observacoes", e.target.value)} />

          <div className="col-span-full">
            <Button onClick={handleSubmit}>Salvar Registro</Button>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Árvores Cadastradas</h2>
        {trees.map((tree, index) => (
          <Card key={index} className="p-4">
            <p><strong>Cliente:</strong> {tree.cliente}</p>
            <p><strong>Local:</strong> {tree.local}</p>
            <p><strong>Espécie:</strong> {tree.especie}</p>
            <p><strong>Altura:</strong> {tree.altura} m | <strong>DAP:</strong> {tree.dap} cm | <strong>Copa:</strong> {tree.copa} m</p>
            <p><strong>Vigor:</strong> {tree.vigor}</p>
            <p><strong>Tratamento:</strong> {tree.tratamento}</p>
            <p><strong>Produto:</strong> {tree.produto} | <strong>Dose:</strong> {tree.dose} | <strong>Modo:</strong> {tree.modo}</p>
            <p><strong>Observações:</strong> {tree.observacoes}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
