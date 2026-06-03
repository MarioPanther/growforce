"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download } from "lucide-react";

/* ===== Types ===== */
interface Resume {
  resume_id: number;
  name: string;
  email: string;
  phone: string;
  resumeFile: string | null;
  created_at: string;
}

const AdminResumes = () => {
  const [resumes, setResumes] = useState<Resume[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("resume_id");
  const [order, setOrder] = useState<"asc" | "desc">("desc");

  const fetchResumes = useCallback(async () => {
    try {
      const res = await axios.get<Resume[]>(
        "http://localhost:5000/api/resume/all",
        {
          params: { search, sortBy, order },
        }
      );
      setResumes(res.data);
    } catch (err) {
      console.error("Failed to load resumes", err);
    } finally {
      setLoading(false);
    }
  }, [order, search, sortBy]);

  useEffect(() => {
    fetchResumes();
  }, [fetchResumes]);

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
        <h1 className="text-3xl font-bold">Resume Applications</h1>

        {/* 🔍 Search */}
        <Input
          placeholder="Search resumes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  Name
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("email")}
                >
                  Email
                </TableHead>
                <TableHead
                  className="cursor-pointer"
                  onClick={() => handleSort("phone")}
                >
                  Phone
                </TableHead>
                <TableHead>Resume</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    Loading...
                  </TableCell>
                </TableRow>
              ) : resumes.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    className="text-center text-muted-foreground"
                  >
                    No resumes found
                  </TableCell>
                </TableRow>
              ) : (
                resumes.map((r) => (
                  <TableRow key={r.resume_id}>
                    <TableCell>{r.name}</TableCell>
                    <TableCell>{r.email}</TableCell>
                    <TableCell>{r.phone}</TableCell>
                    <TableCell>
                      {r.resumeFile ? (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() =>
                            window.open(
                              `http://localhost:5000/uploads/${r.resumeFile}`,
                              "_blank"
                            )
                          }
                        >
                          <Download className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      ) : (
                        "—"
                      )}
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

export default AdminResumes;
