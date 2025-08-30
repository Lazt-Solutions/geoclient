import { Client } from "./client.types";
import { Database } from "./database.types";

export type Visit = Database["public"]["Tables"]["visits"]["Row"];

export type VisitWithClient = Visit & { client: Client };

export type VisitFilterStatus = "all" | "upcoming" | "completed" | "overdue";