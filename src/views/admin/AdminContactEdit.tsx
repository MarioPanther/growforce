"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useNavigate } from "@/lib/router-compat";
import axios from "axios";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const AdminContactEdit = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();


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


  const [contact, setContact] = useState<Contact | null>(null);

  const [status, setStatus] = useState("");
  const [remarks, setRemarks] = useState("");

 const fetchContact = useCallback(async () => {
    const res = await axios.get<Contact>(
        `http://localhost:5000/api/contact/${id}`
    );

    setContact(res.data);
    setStatus(res.data.status);
    setRemarks(res.data.remarks ?? "");
}, [id]);

  useEffect(() => {
    fetchContact();
  }, [fetchContact]);


  const saveChanges = async () => {
    await axios.put(`http://localhost:5000/api/contact/${id}`, {
      status,
      remarks,
    });
    navigate("/admin/contacts");
  };

  if (!contact) return null;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-3xl">
        <h1 className="text-2xl font-bold">Edit Contact</h1>

        <div>
          <strong>Name:</strong> {contact.name}
        </div>
        <div>
          <strong>Email:</strong> {contact.email}
        </div>
        <div>
          <strong>Phone:</strong> {contact.phone}
        </div>

        <div>
          <strong>Full Message</strong>
          <div className="border p-3 mt-2 rounded bg-muted">
            {contact.message}
          </div>
        </div>

        <div>
          <strong>Status:</strong>{" "}
          <Badge className="ml-2">{contact.status}</Badge>
        </div>

        

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded p-2 w-full"
        >
          <option value="NEW">NEW</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="RESOLVED">RESOLVED</option>
        </select>

        <Textarea
          placeholder="Admin remarks"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
          rows={4}
        />

        

        <Button onClick={saveChanges}>Save Changes</Button>
      </div>
    </AdminLayout>
  );
};

export default AdminContactEdit;
