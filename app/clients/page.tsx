"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/client";
// import { GeoHeader } from "@/components/ui/GeoHeader";
import GeoInfoCard from "@/components/ui/GeoInfoCard";
// import GeoButton from "@/components/ui/GeoButton";
import ClientList from "@/components/client/ClientList";
import ClientPopup from "@/components/client/ClientPopup";
import ClientFooter from "@/components/client/ClientFooter"
import { Client } from "@/components/client/ClientCard";

export default function ClientsPage() {
  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  useEffect(() => {
    const fetchClients = async () => {
      const { data, error } = await supabase
        .from("clients")
        .select(`
          id, name, email, phone, status, created_at, updated_at,
          client_tags (
            tags ( name )
          ),
          client_notes (
            id, content, created_at
          )
        `);

      console.log("Supabase data:", data);
      if (error) {
        console.error("Error fetching clients: ", error);
      } else {
        const mapped = data.map((c: any) => ({
          ...c,
          tags: c.client_tags?.map((t: any) => t.tags.name) || [],
          notes: c.client_notes || []
        }));
        setClients(mapped);
      }
    };
    fetchClients();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GeoInfoCard title="Active" description="Currently working with">
            <span className="text-2xl font-bold text-green-600">{clients.length}</span>
          </GeoInfoCard>
          <GeoInfoCard title="Pending" description="Awaiting approval">
            <span className="text-2xl font-bold text-yellow-600">3</span>
          </GeoInfoCard>
          <GeoInfoCard title="Inactive" description="Past clients">
            <span className="text-2xl font-bold text-gray-500">1</span>
          </GeoInfoCard>
        </div>

        {/* Clients List */}
        <ClientList clients={clients} onSelect={setSelectedClient} />
      </main>

      {/* Popup */}
      <ClientPopup client={selectedClient} onClose={() => setSelectedClient(null)} />
    <ClientFooter />
    </div>
  );
}
