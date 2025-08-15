import React from "react";
import { Client } from "./ClientCard";
import {GeoButton} from "@/components/ui/GeoButton";

interface ClientPopupProps {
  client: Client | null;
  onClose: () => void;
}

export default function ClientPopup({ client, onClose }: ClientPopupProps) {
  if (!client) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary text-primary-foreground px-6 py-4 rounded-t-lg flex justify-between items-center">
          <h3 className="text-xl font-semibold">{client.name}</h3>
          <GeoButton variant="ghost" onClick={onClose}>
            ✕
          </GeoButton>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Contact Info */}
          <section>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Contact Information</h4>
            <p>Email: {client.email}</p>
            <p>Phone: {client.phone}</p>
            <p>Status: {client.status}</p>
          </section>

          {/* Addresses */}
          {client.addresses?.length > 0 && (
            <section>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Addresses</h4>
              {client.addresses.map((addr, i) => (
                <div key={i} className="bg-gray-50 p-3 rounded-lg mb-2">
                  {addr}
                </div>
              ))}
            </section>
          )}

          {/* Tags */}
          {client.tags?.length > 0 && (
            <section>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {client.tags.map((tag, i) => (
                  <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    {tag}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Notes */}
          {client.notes?.length > 0 && (
            <section>
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Notes</h4>
              {client.notes.map((note, i) => (
                <div key={i} className="bg-blue-50 border-l-4 border-blue-400 p-3 rounded-r-lg mb-2">
                  {note}
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
