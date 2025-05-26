'use client';

import { Card } from '../common/Card';

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      action: "New employee added",
      details: "John Doe joined as Senior Developer",
      time: "2 hours ago",
      icon: "👤",
      type: "employee"
    },
    {
      id: 2,
      action: "Leave request approved",
      details: "Sarah Smith - 5 days vacation",
      time: "5 hours ago",
      icon: "✅",
      type: "leave"
    },
    {
      id: 3,
      action: "Department updated",
      details: "Engineering team restructured",
      time: "1 day ago",
      icon: "🔄",
      type: "department"
    },
    {
      id: 4,
      action: "Training completed",
      details: "15 employees completed React training",
      time: "1 day ago",
      icon: "🎓",
      type: "training"
    },
    {
      id: 5,
      action: "Performance review",
      details: "Quarterly reviews completed for 20 employees",
      time: "2 days ago",
      icon: "⭐",
      type: "review"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'employee':
        return 'bg-blue-100 text-blue-800';
      case 'leave':
        return 'bg-green-100 text-green-800';
      case 'department':
        return 'bg-purple-100 text-purple-800';
      case 'training':
        return 'bg-yellow-100 text-yellow-800';
      case 'review':
        return 'bg-pink-100 text-pink-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            <div className={`p-2 rounded-full ${getTypeColor(activity.type)}`}>
              <span className="text-lg">{activity.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{activity.action}</p>
              <p className="text-sm text-gray-500">{activity.details}</p>
              <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
} 