import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { 
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset
} from "@/components/ui/sidebar";
import { 
  Users, 
  BookOpen, 
  Settings,
  BarChart3,
  Plus,
  Bell,
  User,
  LogOut,
  UserCog,
  GraduationCap,
  Edit,
  Trash2,
  Shield,
  Activity,
  AlertTriangle,
  LayoutDashboard,
  FileText
} from "lucide-react";

interface AdminDashboardProps {
  user: { role: string; name: string };
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showAddUser, setShowAddUser] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

    // Sidebar menu items
  const menuItems = [
    { title: "Overview", value: "overview", icon: LayoutDashboard },
    { title: "User Management", value: "users", icon: Users },
    { title: "Course Management", value: "courses", icon: BookOpen },
    { title: "System Settings", value: "system", icon: Settings },
    { title: "Activity Logs", value: "logs", icon: FileText },
  ];

  // Dummy data
  const systemStats = {
    totalUsers: 1247,
    totalCourses: 45,
    activeStudents: 980,
    instructors: 156,
    admins: 12
  };

  const allUsers = [
    { id: 1, name: "John Doe", email: "john@edu.com", role: "student", status: "active", lastActive: "2 hours ago" },
    { id: 2, name: "Dr. Sarah Wilson", email: "sarah@edu.com", role: "instructor", status: "active", lastActive: "1 hour ago" },
    { id: 3, name: "Mike Johnson", email: "mike@edu.com", role: "student", status: "inactive", lastActive: "2 days ago" },
    { id: 4, name: "Prof. Robert Chen", email: "robert@edu.com", role: "instructor", status: "active", lastActive: "30 mins ago" },
    { id: 5, name: "Admin User", email: "admin@edu.com", role: "admin", status: "active", lastActive: "5 mins ago" }
  ];

  const allCourses = [
    { id: 1, name: "Advanced Mathematics", code: "MATH301", instructor: "Dr. Sarah Wilson", students: 45, status: "active" },
    { id: 2, name: "Computer Science Fundamentals", code: "CS101", instructor: "Prof. Robert Chen", students: 38, status: "active" },
    { id: 3, name: "Physics Laboratory", code: "PHYS201", instructor: "Dr. Michael Brown", students: 32, status: "active" },
    { id: 4, name: "Linear Algebra", code: "MATH201", instructor: "Dr. Sarah Wilson", students: 28, status: "active" }
  ];

  const systemLogs = [
    { id: 1, action: "User login", user: "john@edu.com", timestamp: "2024-06-01 14:30:00", type: "info" },
    { id: 2, action: "Course created", user: "sarah@edu.com", timestamp: "2024-06-01 13:45:00", type: "success" },
    { id: 3, action: "Failed login attempt", user: "unknown@test.com", timestamp: "2024-06-01 12:15:00", type: "warning" },
    { id: 4, action: "User account deleted", user: "admin@edu.com", timestamp: "2024-06-01 11:30:00", type: "error" },
    { id: 5, action: "Assignment submitted", user: "mike@edu.com", timestamp: "2024-06-01 10:20:00", type: "info" }
  ];

  const notifications = [
    { id: 1, title: "New User Registration", message: "5 new users registered today", time: "2 hours ago", type: "info" },
    { id: 2, title: "System Update", message: "System maintenance scheduled for tonight", time: "4 hours ago", type: "warning" },
    { id: 3, title: "Course Completion", message: "Advanced Math course completed by 15 students", time: "1 day ago", type: "success" }
  ];
  