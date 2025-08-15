import React from "react";
import GeoInfoCard from "@/components/ui/GeoInfoCard";

export type Client = {
  id: string;
  name: string;
  status: "Active" | "Pending" | "Inactive";
  phone: string;
  email: string;
  addresses?: string[];
  tags?: string[];
  notes?: string[];
};

interface ClientCardProps {
  client: Client;
  onClick: (client: Client) => void;
}

export default function ClientCard({ client, onClick }: ClientCardProps) {
  const statusColors = {
    Active: "text-green-600",
    Pending: "text-yellow-600",
    Inactive: "text-gray-500"
  };

  return (
    <div onClick={() => onClick(client)} className="cursor-pointer">
      <GeoInfoCard title={client.name} description={client.phone}>
        <span className={`font-medium ${statusColors[client.status]}`}>
          {client.status}
        </span>
      </GeoInfoCard>
    </div>
  );
}
