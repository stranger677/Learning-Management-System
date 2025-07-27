import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, FileText, Calendar, Clock, AlertTriangle } from "lucide-react";

interface AssignmentListPageProps {
  user: { role: string; name: string };
  onBack: () => void;
}

const AssignmentListPage: React.FC<AssignmentListPageProps> = ({ user, onBack }) => {
  const [activeTab, setActiveTab] = useState("all");

  const allAssignments = [
    { 
      id: 1, 
      title: "Calculus Problem Set 5", 
      course: "MATH301", 
      courseName: "Advanced Mathematics",
      dueDate: "2024-06-15", 
      status: "pending", 
      grade: null,
      submittedAt: null,
      maxPoints: 100,
      type: "problem-set"
    },
    { 
      id: 2, 
      title: "Programming Assignment 3", 
      course: "CS101", 
      courseName: "Computer Science Fundamentals",
      dueDate: "2024-06-12", 
      status: "submitted", 
      grade: 85,
      submittedAt: "2024-06-10",
      maxPoints: 100,
      type: "coding"
    },
    { 
      id: 3, 
      title: "Lab Report - Wave Mechanics", 
      course: "PHYS201", 
      courseName: "Physics Laboratory",
      dueDate: "2024-01-18", 
      status: "graded", 
      grade: 92,
      submittedAt: "2024-01-15",
      maxPoints: 100,
      type: "report"
    },
        { 
      id: 4, 
      title: "Research Paper Draft", 
      course: "MATH301", 
      courseName: "Advanced Mathematics",
      dueDate: "2024-07-20", 
      status: "future", 
      grade: null,
      submittedAt: null,
      maxPoints: 150,
      type: "research"
    },
    { 
      id: 5, 
      title: "Database Design Project", 
      course: "CS101", 
      courseName: "Computer Science Fundamentals",
      dueDate: "2024-01-05", 
      status: "overdue", 
      grade: 0,
      submittedAt: null,
      maxPoints: 200,
      type: "project"
    }
  ];

  const filterAssignments = (status: string) => {
    if (status === "all") return allAssignments;
    
    const now = new Date();
    const currentDate = now.toISOString().split('T')[0];
    
    switch (status) {
      case "past":
        return allAssignments.filter(assignment => 
          assignment.dueDate < currentDate && (assignment.status === "graded" || assignment.status === "overdue")
        );
      case "present":
        return allAssignments.filter(assignment => 
          assignment.status === "pending" || assignment.status === "submitted"
        );
      case "future":
        return allAssignments.filter(assignment => 
          assignment.status === "future"
        );
      default:
        return allAssignments;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'submitted': return 'bg-blue-100 text-blue-800';
      case 'graded': return 'bg-green-100 text-green-800';
      case 'future': return 'bg-gray-100 text-gray-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending': return <Clock className="h-4 w-4" />;
      case 'submitted': return <FileText className="h-4 w-4" />;
      case 'graded': return <FileText className="h-4 w-4" />;
      case 'future': return <Calendar className="h-4 w-4" />;
      case 'overdue': return <AlertTriangle className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };