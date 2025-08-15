"use client";

import { useState } from "react";
import { GeoHeader } from "@/components/ui/GeoHeader";
import GeoInfoCard from "@/components/ui/GeoInfoCard";
// import GeoButton from "@/components/ui/GeoButton";
import ClientList from "@/components/client/ClientList";
import ClientPopup from "@/components/client/ClientPopup";
import { Client } from "@/components/client/ClientCard";

export default function ClientsPage() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const clients: Client[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      status: "Active",
      phone: "(555) 123-4567",
      email: "sarah.johnson@email.com",
      addresses: ["123 Main Street, New York, NY 10001", "456 Business Ave, New York, NY 10002"],
      tags: ["VIP Client", "Enterprise", "High Priority"],
      notes: ["Initial meeting went very well.", "Client referred by John Smith."]
    },
    {
      id: "2",
      name: "Michael Chen",
      status: "Pending",
      phone: "(555) 987-6543",
      email: "michael.chen@techcorp.com",
      addresses: ["789 Tech Plaza, San Francisco, CA 94105"],
      tags: ["Tech Startup", "Follow-up Required"],
      notes: ["Needs approval from board. Scheduled follow-up call."]
    }
    // more clients...
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top App Header */}
      {/* <GeoHeader /> */}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <GeoInfoCard title="Active" description="Currently working with">
            <span className="text-2xl font-bold text-green-600">8</span>
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
    </div>
  );
}
