import React from "react";
import ClientCard, { Client } from "./ClientCard";

interface ClientListProps {
  clients: Client[];
  onSelect: (client: Client) => void;
}

export default function ClientList({ clients, onSelect }: ClientListProps) {
  return (
    <div
      className="space-y-4 custom-scrollbar"
      style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}
    >
      {clients.map((client) => (
        <ClientCard key={client.id} client={client} onClick={onSelect} />
      ))}
    </div>
  );
}
