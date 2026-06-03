"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "@/lib/router-compat";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* ===== Types ===== */
interface Contact {
  contact_id: number;
  name: string;
  email: string;
  phone: string;
  pageName: string;
  message: string;
  status: string;
  remarks?: string;
  createdAt: string;
}

const AdminContacts = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("createdAt");
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const navigate = useNavigate();

  const truncate = (text: string, limit = 2500) =>
    text.length > limit ? text.slice(0, limit) + "..." : text;

  const fetchContacts = useCallback(async () => {
    try {
      const res = await axios.get<Contact[]>(
        "http://localhost:5000/api/contact/all",
        {
          params: { search, sortBy, order },
        }
      );
      setContacts(res.data);
    } catch (err) {
      console.error("Failed to load contacts", err);
    } finally {
      setLoading(false);
    }
  }, [order, search, sortBy]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setOrder(order === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setOrder("asc");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>

        {/* 🔍 Search */}
        <Input
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead onClick={() => handleSort("name")} className="cursor-pointer">
                  Name
                </TableHead>
                <TableHead onClick={() => handleSort("email")} className="cursor-pointer">
                  Email
                </TableHead>
                <TableHead onClick={() => handleSort("phone")} className="cursor-pointer">
                  Phone
                </TableHead>
                <TableHead>Message</TableHead>
                <TableHead onClick={() => handleSort("status")} className="cursor-pointer">
                  Status
                </TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : contacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-muted-foreground">
                    No messages found
                  </TableCell>
                </TableRow>
              ) : (
                contacts.map((c) => (
                  <TableRow key={c.contact_id}>
                    <TableCell>{c.name}</TableCell>
                    <TableCell>{c.email}</TableCell>
                    <TableCell>{c.phone}</TableCell>
                    <TableCell className="max-w-xl truncate">
                      {truncate(c.message)}
                    </TableCell>
                    <TableCell>
                      <Badge>{c.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        onClick={() => navigate(`/admin/contacts/detail?id=${c.contact_id}`)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminContacts;
