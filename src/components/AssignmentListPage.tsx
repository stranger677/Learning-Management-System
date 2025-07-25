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