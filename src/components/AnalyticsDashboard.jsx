import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  BarChart3, 
  Users, 
  MousePointer, 
  Clock, 
  Eye, 
  Download, 
  RefreshCw,
  Trash2,
  Settings,
  Activity
} from 'lucide-react';

const AnalyticsDashboard = ({ isOpen, onClose }) => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (isOpen) {
      refreshData();
    }
  }, [isOpen]);

  const refreshData = () => {
    setIsLoading(true);
    if (window.analyticsService) {
      const data = window.analyticsService.getAnalyticsData();
      setAnalyticsData(data);
    }
    setIsLoading(false);
  };

  const clearAnalyticsData = () => {
    if (window.analyticsService) {
      window.analyticsService.clearAnalyticsData();
      refreshData();
    }
  };

  const trackTestEvent = () => {
    if (window.analyticsService) {
      window.analyticsService.trackEvent('test_event', {
        test_parameter: 'test_value',
        timestamp: new Date().toISOString()
      });
      refreshData();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border rounded-lg shadow-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-3">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-semibold">Analytics Dashboard</h2>
            <Badge variant={analyticsData?.isInitialized ? "default" : "secondary"}>
              {analyticsData?.isInitialized ? "Active" : "Inactive"}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={refreshData}
              disabled={isLoading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={trackTestEvent}
            >
              <Activity className="h-4 w-4 mr-2" />
              Test Event
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              Close
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Page Views</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analyticsData?.pageViews || 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Total page views tracked
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Total Events</CardTitle>
                    <MousePointer className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analyticsData?.totalEvents || 0}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      All events tracked
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Session Duration</CardTitle>
                    <Clock className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {analyticsData?.sessionData?.duration || 0}s
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Average session time
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">User Properties</CardTitle>
                    <Users className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">
                      {Object.keys(analyticsData?.userProperties || {}).length}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Properties set
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {analyticsData?.customEvents?.slice(-5).reverse().map((event, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-muted rounded">
                        <div>
                          <p className="font-medium">{event.event_name}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(event.timestamp).toLocaleTimeString()}
                          </p>
                        </div>
                        <Badge variant="outline">{event.page}</Badge>
                      </div>
                    ))}
                    {(!analyticsData?.customEvents || analyticsData.customEvents.length === 0) && (
                      <p className="text-muted-foreground text-center py-4">
                        No events tracked yet
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Events Tab */}
            <TabsContent value="events" className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Event Log</h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAnalyticsData}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Clear Events
                </Button>
              </div>
              
              <div className="space-y-2 max-h-96 overflow-y-auto">
                {analyticsData?.customEvents?.map((event, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="default">{event.event_name}</Badge>
                            <span className="text-sm text-muted-foreground">
                              {new Date(event.timestamp).toLocaleString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            Page: {event.page}
                          </p>
                          {Object.keys(event).filter(key => 
                            !['event_name', 'timestamp', 'page', 'user_agent'].includes(key)
                          ).map(key => (
                            <div key={key} className="text-xs">
                              <span className="font-medium">{key}:</span> {String(event[key])}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                {(!analyticsData?.customEvents || analyticsData.customEvents.length === 0) && (
                  <p className="text-muted-foreground text-center py-8">
                    No events tracked yet. Try interacting with the site or click "Test Event".
                  </p>
                )}
              </div>
            </TabsContent>

            {/* Users Tab */}
            <TabsContent value="users" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>User Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(analyticsData?.userProperties || {}).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">{String(value)}</span>
                      </div>
                    ))}
                    {Object.keys(analyticsData?.userProperties || {}).length === 0 && (
                      <p className="text-muted-foreground text-center py-4">
                        No user properties set
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Session Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {Object.entries(analyticsData?.sessionData || {}).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between p-2 bg-muted rounded">
                        <span className="font-medium">{key}</span>
                        <span className="text-sm text-muted-foreground">{String(value)}</span>
                      </div>
                    ))}
                    {Object.keys(analyticsData?.sessionData || {}).length === 0 && (
                      <p className="text-muted-foreground text-center py-4">
                        No session data available
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Settings Tab */}
            <TabsContent value="settings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics Configuration</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Analytics Status</p>
                        <p className="text-sm text-muted-foreground">
                          {analyticsData?.isInitialized ? 'Active and tracking' : 'Inactive or not configured'}
                        </p>
                      </div>
                      <Badge variant={analyticsData?.isInitialized ? "default" : "secondary"}>
                        {analyticsData?.isInitialized ? "Active" : "Inactive"}
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Debug Mode</p>
                        <p className="text-sm text-muted-foreground">
                          Show detailed analytics logs in console
                        </p>
                      </div>
                      <Badge variant="outline">
                        {process.env.NODE_ENV === 'development' ? "Enabled" : "Disabled"}
                      </Badge>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        onClick={() => {
                          if (window.analyticsService) {
                            window.analyticsService.setUserProperties({
                              userType: 'developer',
                              userSource: 'direct',
                              userDevice: navigator.userAgent.includes('Mobile') ? 'mobile' : 'desktop'
                            });
                            refreshData();
                          }
                        }}
                      >
                        <Settings className="h-4 w-4 mr-2" />
                        Set Test User Properties
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard; 